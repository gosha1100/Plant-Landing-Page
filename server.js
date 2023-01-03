const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');

const PORT = 3005;

app.use(cors());
app.options('*', cors());
app.use(express.static('pflanzenkult'));
app.use(express.json())

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  const mailOptions = {
    to: '',
    subject: req.body.subject,
    text: req.body.email + "\n" + req.body.subject + "\n" + req.body.message,
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})