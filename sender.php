<?php
	$Subject='Заявка с сайта';
    $from = "noreply". $HTTP_HOST;
	


	$to="repair-team@mail.ru";
	
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: noreply <".$from.">\r\n"; 	

	$msg = '
		<p>	Имя: '.$_POST['name'].'</p>
		<p>	Телефон: '.$_POST['phone'].'</p> 
	';

	if(mail($to, $Subject, $msg, $headers))
	{
		 echo json_encode(array(
        "result" => 'ok'
		));
    
	}
	else
	{
		echo "Error : Email has not been sent.";
	}	
?>


