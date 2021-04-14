<?php
    $body = json_decode($_POST['message']);
    $mail = json_decode($_POST['mail']);
    $name = json_decode($_POST['name']);

    mail_send($name, $mail, $body);
    function mail_send($name, $mail, $body)
    {
        require('PHPmailer/PHPmailerAutoload.php');
        $mail = new PHPMailer();
        $mail->IsSMTP();        //Sets Mailer to send message using SMTP
        $mail->Host = 'smtp.gmail.com';  //Sets the SMTP hosts of your Email hosting, this for Godaddy
        $mail->Port = '465';        //Sets the default SMTP server port
        $mail->SMTPAuth = true;       //Sets SMTP authentication. Utilizes the Username and Password variables
        $mail->Username = 'sumedh.udar20000@gmail.com';     //Sets SMTP username
        $mail->Password = 'gbbfpoazpthlrmqa';     //Sets SMTP password
        $mail->SMTPSecure = 'ssl';       //Sets connection prefix. Options are "", "ssl" or "tls"
        $mail->From = 'sumedh.udar20000@gmail.com';   //Sets the From email address for the message
        $mail->FromName = 'Sumedh Udar';   //Sets the From name of the message
        $mail->AddAddress('sumedh.udar2000@gmail.com');  //Adds a "To" address
        $mail->addCC($mail);
        $mail->WordWrap = 50;       //Sets word wrapping on the body of the message to a given number of characters
        $mail->IsHTML(true);       //Sets message type to HTML    
        // $mail->AddAttachment($dest);         //Adds an attachment from a path on the filesystem
        $mail->Subject = 'Customer Query: ' + $name;   //Sets the Subject of the message
        $mail->Body = $body; //An HTML or plain text message body
        $mail->SMTPDebug  = 2;   
        if($mail->Send())        //Send an Email. Return true on success or false on error
        {
        header("Location: http://testing.solutions-is.com/");
        exit();
        }
        else{
            $message = '<label class="text-success">Customer Details has not been send successfully...</label>';
        }
        unlink($dest);

    }

?>