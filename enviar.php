<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = htmlspecialchars($_POST['name']);
    $correo = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['phone']);
    $mensaje = htmlspecialchars($_POST['message']);

    // Dirección de correo a la que se enviará el formulario
    $destinatario = "ernestoo.pc@gmail.com"; // Reemplaza con tu correo
    $asunto = "QUIERO CONTACTARME CONTIGO";

    // Crear el contenido del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $correo\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo
    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        echo "El mensaje se envió correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Intenta de nuevo.";
    }
} else {
    echo "Método no permitido.";
}
?>