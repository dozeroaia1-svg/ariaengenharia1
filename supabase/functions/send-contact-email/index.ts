import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Configurar cliente Supabase para acessar o Storage
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  attachmentPath?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, attachmentPath }: ContactFormRequest = await req.json();

    console.log("Sending contact form email:", { name, email, phone, hasAttachment: !!attachmentPath });

    let attachmentData = null;
    let attachmentName = '';
    
    // Baixar anexo do Storage se existir
    if (attachmentPath) {
      try {
        const { data, error } = await supabase.storage
          .from('contact-attachments')
          .download(attachmentPath);
          
        if (error) {
          console.error("Erro ao baixar anexo:", error);
        } else {
          attachmentData = await data.arrayBuffer();
          attachmentName = attachmentPath.split('/').pop() || 'anexo';
          console.log("Anexo baixado com sucesso:", attachmentName);
        }
      } catch (attachError) {
        console.error("Erro no download do anexo:", attachError);
      }
    }

    // Preparar dados do email
    const emailData: any = {
      from: "Aria Engenharia <contato@ariaeng.com.br>",
      to: ["contato@ariaeng.com.br"],
      reply_to: email,
      subject: `Nova mensagem de contato - ${name}${attachmentData ? ' (com anexo)' : ''}`,
      html: `
        <h2>Nova mensagem de contato recebida</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ${attachmentData ? '<p><strong>Anexo:</strong> ' + attachmentName + '</p>' : ''}
        <hr>
        <p><small>Mensagem enviada através do site da Aria Engenharia</small></p>
      `,
      text: `Nova mensagem de contato\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}${attachmentData ? '\n\nAnexo: ' + attachmentName : ''}`,
    };

    // Adicionar anexo se existir
    if (attachmentData) {
      emailData.attachments = [{
        filename: attachmentName,
        content: new Uint8Array(attachmentData),
      }];
    }

    // Tentativa primária: envia para o inbox empresarial (requer domínio verificado na Resend)
    const primary = await resend.emails.send(emailData);

    if (primary.error) {
      console.error("Resend primary error:", primary.error);

      // Preparar dados do email de fallback
      const fallbackData: any = {
        from: "Aria Engenharia <onboarding@resend.dev>",
        to: ["ariaengenharia1@gmail.com"],
        subject: `[FALLBACK] Nova mensagem de contato - ${name}${attachmentData ? ' (com anexo)' : ''}`,
        html: `
          <p style="color:#b45309"><strong>Aviso:</strong> domínio não verificado na Resend. Entrega realizada via fallback.</p>
          <p><strong>Destino desejado:</strong> contato@ariaeng.com.br</p>
          <hr/>
          <h2>Nova mensagem de contato recebida</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ${attachmentData ? '<p><strong>Anexo:</strong> ' + attachmentName + '</p>' : ''}
          <hr>
          <p><small>Mensagem enviada através do site da Aria Engenharia</small></p>
        `,
        text: `AVISO: domínio não verificado na Resend. Entrega via fallback.\nDestino desejado: contato@ariaeng.com.br\n\nNova mensagem de contato\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}${attachmentData ? '\n\nAnexo: ' + attachmentName : ''}`,
      };

      // Adicionar anexo ao fallback se existir
      if (attachmentData) {
        fallbackData.attachments = [{
          filename: attachmentName,
          content: new Uint8Array(attachmentData),
        }];
      }

      // Fallback: enquanto o domínio não estiver verificado, enviaremos para o e-mail da conta Resend
      const fallback = await resend.emails.send(fallbackData);

      if (fallback.error) {
        console.error("Resend fallback error:", fallback.error);
        throw new Error(fallback.error.message || "Falha ao enviar e-mail");
      }

      console.log("Email sent via fallback:", fallback.data);
      return new Response(JSON.stringify({ success: true, id: fallback.data?.id, fallback: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    console.log("Email sent successfully:", primary.data);
    
    // Limpar arquivo temporário após envio
    if (attachmentPath) {
      try {
        await supabase.storage
          .from('contact-attachments')
          .remove([attachmentPath]);
        console.log("Arquivo temporário removido:", attachmentPath);
      } catch (cleanupError) {
        console.error("Erro ao remover arquivo temporário:", cleanupError);
      }
    }

    return new Response(JSON.stringify({ success: true, id: primary.data?.id, fallback: false }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);