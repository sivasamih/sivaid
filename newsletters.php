<?php

## CONFIG ##

# LIST EMAIL ADDRESS
$recipient = "info@idenpro.com";

# SUBJECT (Subscribe/Remove)
$subject = "New user newsletter subscription";

# RESULT PAGE
$location = "thankyou.html";

## FORM VALUES ##

# SENDER - WE ALSO USE THE RECIPIENT AS SENDER IN THIS SAMPLE
# DON'T INCLUDE UNFILTERED USER INPUT IN THE MAIL HEADER!
$sender = $recipient;

# MAIL BODY
$body .= "First Name: ".$_REQUEST['firstname']." \n";
$body .= "Last Name: ".$_REQUEST['lastname']." \n";
$body .= "Organization Name: ".$_REQUEST['account_id']." \n";
$body .= "Email: ".$_REQUEST['email']." \n";
# add more fields here if required

## SEND MESSGAE ##

mail( $recipient, $subject, $body, "From: $sender" ) or die ("Mail could not be sent.");

## SHOW RESULT PAGE ##

header( "Location: $location" );
?>

