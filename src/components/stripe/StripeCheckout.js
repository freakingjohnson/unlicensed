import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import PropTypes from 'prop-types'

const CURRENCY = 'USD'

const successPayment = () => {
  alert('Payment Successful')
}

const errorPayment = () => {
  alert('Payment Error')
}

const onToken = (amount, description, accountId) => token =>
  axios.post(
    '/api/charge',
    {
      amount,
      description,
      currency: CURRENCY,
      source: token.id,
      destination: {
        amount: (amount * 0.99),
        account: accountId,
      },
    },
  ).then(successPayment)
    .catch(errorPayment)

const Checkout = ({
  name, description, amount, accountId,
}) =>
  (<StripeCheckout
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description, accountId)}
    currency={CURRENCY}
    stripeKey="pk_test_8M9YJObYXy59LqBvi7oPCQJZ"
  />)

export default Checkout

Checkout.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  accountId: PropTypes.number.isRequired,
}