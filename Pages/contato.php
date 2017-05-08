<?php
//https://webdesign.tutsplus.com/tutorials/building-a-bootstrap-contact-form-using-php-and-ajax--cms-23068
echo "PHP!"; 
if (isset($_POST['btnSubmit'])) {
  
  //Variaveis de POST, Alterar somente se necessário 
  //====================================================
  $nome = $_POST['Name'];
  $email = $_POST['InputEmail'];
  $DDD = $_POST['DDD']; 
  $Phone = $_POST['Phone']; 

  $mensagem = $_POST['MessageArea'];
  //====================================================
  
  //REMETENTE --> ESTE EMAIL TEM QUE SER VALIDO DO DOMINIO
  //==================================================== 
  $email_remetente = "noreply@psicologofranciscodarley.net"; // deve ser uma conta de email do seu dominio 
  //====================================================
  
  //Configurações do email, ajustar conforme necessidade
  //==================================================== 
  //$email_destinatario = "contato@psicologofranciscodarley.net"; // pode ser qualquer email que receberá as mensagens
  $email_destinatario = "gdarley@gmail.com"; // pode ser qualquer email que receberá as mensagens
  $email_reply = "$email"; 
  $email_assunto = "Contato Psicologo Francisco Darley"; // Este será o assunto da mensagem
  //====================================================
  
  //Monta o Corpo da Mensagem
  //====================================================
  $email_conteudo = "Nome = $nome \n"; 
  $email_conteudo .= "Email = $email \n";
  $email_conteudo .= "Telefone = ($DDD)-($Phone) \n"; 
  $email_conteudo .= "Mensagem = $mensagem \n"; 
  //====================================================
  echo($email_conteudo);
  //Seta os Headers (Alterar somente caso necessario) 
  //==================================================== 
  $email_headers = implode ( "\n",array ( "From: $email_remetente", "Reply-To: $email_reply", "Subject: $email_assunto","Return-Path: $email_remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );
  //====================================================
  
  //Enviando o email 
  //==================================================== 
  if (mail ($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_headers)){ 
          echo "success"; 
          } 
      else{ 
          echo "fail"; } 
  //====================================================
} 
?>