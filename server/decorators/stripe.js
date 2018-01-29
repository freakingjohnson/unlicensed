const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const axios = require('axios')

const postStripeCharge = res => (stripeErr, stripeRes) => {
  stripeErr ? res.status(500).send({ error: stripeErr }) : res.status(200).send({ success: stripeRes })
}

const charge = (req, res) => {
  stripe.charges.create(req.body, postStripeCharge(res))
}

const addStipeAcc = (req, res) => {
  const db = req.app.get('db')
  console.log(req.body)
  const { code, email } = req.body

  axios.post('https://connect.stripe.com/oauth/token', {
    client_secret: process.env.REACT_APP_STRIPE_SECRET_KEY, code, grant_type: 'authorization_code', headers: {},
  }).then((data) => {
    console.log(data.data)
    db.add_stripe_id([data.data.stripe_user_id, email]).then((data) => {
      res.status(200).send(data)
    })
  }).catch(res.status(500))
}

module.exports = (app) => {
  app.post('/api/charge', charge)
  app.post('/api/addStripe', addStipeAcc)
}

