-- Criar bucket para uploads temporários de contato
INSERT INTO storage.buckets (id, name, public) 
VALUES ('contact-attachments', 'contact-attachments', false);

-- Política para permitir upload de arquivos (acesso público para upload)
CREATE POLICY "Permitir upload de anexos de contato" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'contact-attachments');

-- Política para permitir leitura de arquivos (necessário para envio por email)
CREATE POLICY "Permitir leitura de anexos de contato" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'contact-attachments');