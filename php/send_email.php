<?php

if(isset($_POST['submit'])) {
    $to = 'andrea.bona1996@gmail.com'; // replace with your email address
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: $name <$email>";

    // send email
    if(mail($to, $subject, $message, $headers)) {
        echo 'Your message has been sent successfully!';
    } else {
        echo 'Sorry, there was an error sending your message.';
    }
}

?>
