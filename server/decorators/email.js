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
  let HelperOptions = {
      from: '"Jose from JoseFinder" <josefinder30@gmail.com',
      to: req.body.email,
      subject: req.body.subject,
      html: `Name: ${req.body.name} </br> Email: ${req.body.email} </br> Phone Number: ${req.body.phone} </br> Message: ${req.body.message}`,
    },
    response,
    status = 200

  transporter.sendMail(HelperOptions, (error, info) => {
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