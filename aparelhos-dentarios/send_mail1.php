<?php require_once("swift-mailer/lib/swift_required.php"); ?>
<?php
//date_default_timezone_set("Europe/Lisbon");
// Open DataBase


// Swift-mailer: Create the Transport
$transport = Swift_SmtpTransport::newInstance('mail.byhost.eu', 25)
  ->setUsername('noreply@byhost.eu')
  ->setPassword('!dtx2906')
  ;

// Swift-mailer: Create the Mailer using your created Transport
$mailer = Swift_Mailer::newInstance($transport);


// Variaveis vindas do formulario
$nome=$_POST['firstname'];
$email=$_POST['email'];

//Apenas para testes
//$nome='Nome';
//$apelido='apelido';
//$email='xpto@xpto.com';

//Start Vars

$msg ='Landing Page de Redes Sociais' . PHP_EOL;
$msg = $msg . 'Nome: ' .$nome . PHP_EOL;
$msg = $msg . 'Email: ' . $email . PHP_EOL;



$msg=$msg . PHP_EOL . 'Fim de Mensagem.';


//Prepare Mail
$subject='Pedido de Informação - Serviço de Ortodontia';

//Mails definitivos
//->setTo(array('jmagalhaes@bynet.pt' => 'JMagalhaes','magalhaes.jm@gmail.com' => 'JMagalhaes in GMail','misabel@bynet.pt' => 'MIsabel','ana@bynet.pt' => 'ARodrigues','telma@bynet.pt' => 'TFonseca'))

// Swift-mailer: Create a message
$message = Swift_Message::newInstance()
  ->setSubject($subject)
  ->setFrom(array('info@bynet.pt' => 'Info'))
  ->setTo(array('jmagalhaes@bynet.pt' => 'Teste email - Clinica Arca dagua'))
  ->setBody($msg)
  ;

 
// Send the message
$result = $mailer->send($message);
//echo 'Enviado mail.' . '<br>';

?>
<html>
<head>
<meta charset="UTF-8">
<title>Thank You</title>
<script type="text/javascript">
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
</script>
</head>

<body onLoad="MM_goToURL('parent','obrigado.html');return document.MM_returnValue">
</body>
</html>