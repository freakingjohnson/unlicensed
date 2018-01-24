const nodemailer = require('nodemailer')
require('dotenv').config({
  path: '../../.env',
})

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 587,
  auth: {
    user: 'josefinder30@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

const sendMail = (req, res) => {
  const {
    proEmail, email, name, subject, phone, message,
  } = req.body

  let HelperOptions = {
      from: '"Jose from JoseFinder" <josefinder30@gmail.com',
      to: proEmail,
      subject,
      html: `Name: ${name} </br> Email: ${email} </br> Phone Number: ${phone} </br> Message: ${message}`,
    },
    response,
    status = 200

  transporter.sendMail(HelperOptions, (error) => {
    if (error) {
      response = error
      status = 500
    }
    response = 'all good'
  })

  res.status(status).send(response)
}

module.exports = (app) => {
  app.post('/api/sendEmail', sendMail)
}