import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormRequest = await req.json();

    console.log("Sending contact form email:", { name, email, phone });

    // Tentativa primária: envia para o inbox empresarial (requer domínio verificado na Resend)
    const primary = await resend.emails.send({
      from: "Aria Engenharia <contato@ariaeng.com.br>",
      to: ["contato@ariaeng.com.br"],
      reply_to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <h2>Nova mensagem de contato recebida</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Mensagem enviada através do site da Aria Engenharia</small></p>
      `,
      text: `Nova mensagem de contato\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`,
    });

    if (primary.error) {
      console.error("Resend primary error:", primary.error);

      // Fallback: enquanto o domínio não estiver verificado, enviaremos para o e-mail da conta Resend
      const fallback = await resend.emails.send({
        from: "Aria Engenharia <onboarding@resend.dev>",
        to: ["ariaengenharia1@gmail.com"],
        subject: `[FALLBACK] Nova mensagem de contato - ${name}`,
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
          <hr>
          <p><small>Mensagem enviada através do site da Aria Engenharia</small></p>
        `,
        text: `AVISO: domínio não verificado na Resend. Entrega via fallback.\nDestino desejado: contato@ariaeng.com.br\n\nNova mensagem de contato\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`,
      });

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