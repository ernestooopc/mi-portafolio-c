<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['name']);
    $correo = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['phone']);
    $mensaje = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);
    try {
        // Configuraciones del servidor
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ernestoo.pc@gmail.com'; // Cambia esto por tu correo
        $mail->Password = 'agtnsqmgyqhgjovk'; // Cambia esto por tu contraseña
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        //destinatario
        $mail->addAddress('ernestoo.pc@gmail.com', 'Recipient Name'); // Cambia esto por el correo de destino

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'QUIERO CONTACTARME CONTIGO';
        $mail->Body    = "Nombre: $nombre<br>Correo: $correo<br>Teléfono: $telefono<br>Mensaje:<br>$mensaje";

        $mail->send();
        echo "<script>
        alert('El mensaje ha sido enviado');
        window.location.href='/D_PROYECTO/Frontend/contactMe.html'; 
        </script>";
        exit();



        
        exit();
    } catch (Exception $e) {
        echo 'El mensaje no pudo ser enviado. Mailer Error: ', $mail->ErrorInfo;
    }
} else {
    echo "Método no permitido.";
}


?>