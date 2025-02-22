const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/enviar", async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Configura tu email en .env
      pass: process.env.EMAIL_PASS, // Usa una contraseña segura o App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "QUIERO CONTACTARME CONTIGO",
    html: `<p><strong>Nombre:</strong> ${name}</p>
           <p><strong>Correo:</strong> ${email}</p>
           <p><strong>Teléfono:</strong> ${phone}</p>
           <p><strong>Mensaje:</strong></p>
           <p>${message}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "El mensaje ha sido enviado." });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el mensaje." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
