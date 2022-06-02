<?php
// require ReCaptcha class
require('recaptcha-master/src/autoload.php');

// configure
ini_set("SMTP", "localhost");
ini_set("sendmail_from", "info@siva-id.co");
ini_set("smtp_port", "25");
$from = $_POST['email'];
$sendTo = '<info@siva-id.co>';
$subject = 'Website contact inquiry from www.siva-id.co';
$fields = array('name' => 'Name', 'email' => 'Email', 'oth' => 'Where did you heard about us?', 'othn' => 'Other Source', 'company' => 'Company', 'subject' => 'Subject', 'phone' => 'Phone', 'message' => 'Message'); // array variable name => Text to appear in the email
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try
{
    if (!empty($_POST)) {
        
        $emailText = "You have new message from contact form\n=============================\n";
        foreach ($_POST as $key => $value) {

            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }
        

        $headers = array('Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $from,
            'Return-Path: ' . $from,
        );

        mail($sendTo, $subject, $emailText, implode("\n", $headers));

        $responseArray = array('type' => 'success', 'message' => $okMessage);
		
		header('Location: http://siva-id.co/thank-you.html');
    }
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
