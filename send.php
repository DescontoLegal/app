<?php
 
/* Valores recebidos do formulário  */
$type = $_POST['type'];
$name = $_POST['name'];
$age = $_POST['age'];
$c_status = $_POST['c_status'];
$id = $_POST['id'];
$cpf = $_POST['cpf'];
$phone = $_POST['phone'];
$s_status = $_POST['s_status'];
$adress = $_POST['adress'];
$nb = $_POST['nb'];
$file = $_FILES['file'];
 
/* Destinatário e remetente */
$to = "empreendimentos@cartaodescontolegal.com.br";
$remetente = "empreendimentos@cartaodescontolegal.com.br"; // Deve ser um email válido do domínio
 
/* Cabeçalho da mensagem  */
$boundary = "XYZ-" . date("dmYis") . "-ZYX";
$headers = "MIME-Version: 1.0\n";
$headers.= "From: $remetente\n";
$headers.= "Reply-To: $replyto\n";
$headers.= "Content-type: multipart/mixed; boundary=\"$boundary\"\r\n";  
$headers.= "$boundary\n"; 
 
/* Layout da mensagem  */
$corpo_mensagem = " 
<br>
<br><strong>Formulário para </strong> $type <br>
<br><strong>Nome:</strong> $name
<br><strong>Idade:</strong> $age
<br><strong>Estado Civil:</strong> $c_status
<br><strong>Identidade:</strong> $id
<br><strong>CPF:</strong> $cpf
<br><strong>Telefone:</strong> $phone
<br><strong>Escolaridade:</strong> $s_status
<br><strong>Endereço:</strong> $adress
<br><strong>Bairro:</strong> $nb
<br>
";
 
/* Função que codifica o anexo para poder ser enviado na mensagem  */
if(file_exists($file["tmp_name"]) and !empty($file)){
 
    $fp = fopen($_FILES["file"]["tmp_name"],"rb"); // Abri o arquivo enviado.
 $anexo = fread($fp,filesize($_FILES["file"]["tmp_name"])); // Le o arquivo aberto na linha anterior
 $anexo = base64_encode($anexo); // Codifica os dados com MIME para o e-mail 
 fclose($fp); // Fecha o arquivo aberto anteriormente
    $anexo = chunk_split($anexo); // Divide a variável do arquivo em pequenos pedaços para poder enviar
    $mensagem = "--$boundary\n"; // Nas linhas abaixo possuem os parâmetros de formatação e codificação, juntamente com a inclusão do arquivo anexado no corpo da mensagem
    $mensagem.= "Content-Transfer-Encoding: 8bits\n"; 
    $mensagem.= "Content-Type: text/html; charset=\"utf-8\"\n\n";
    $mensagem.= "$corpo_mensagem\n"; 
    $mensagem.= "--$boundary\n"; 
    $mensagem.= "Content-Type: ".$arquivo["type"]."\n";  
    $mensagem.= "Content-Disposition: attachment; filename=\"".$file["name"]."\"\n";  
    $mensagem.= "Content-Transfer-Encoding: base64\n\n";  
    $mensagem.= "$anexo\n";  
    $mensagem.= "--$boundary--\r\n"; 
}
 else // Caso não tenha anexo
 {
 $mensagem = "--$boundary\n"; 
 $mensagem.= "Content-Transfer-Encoding: 8bits\n"; 
 $mensagem.= "Content-Type: text/html; charset=\"utf-8\"\n\n";
 $mensagem.= "$corpo_mensagem\n";
}
 
/* Função que envia a mensagem  */
if(mail($to, $assunto, $mensagem, $headers))
{
 echo "<br><br><center><b><font color='green'>Dados enviados com sucesso!";
} 
 else
 {
 echo "<br><br><center><b><font color='red'>Ocorreu um erro ao enviar a mensagem!";
}
?>