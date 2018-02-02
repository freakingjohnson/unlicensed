import React from 'react'
import { Button } from 'material-ui'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Connect = ({
  id, name, email, proLoggedIn, userName, userId,
}) => (
  <div>
    <Button onClick={() => store(email, proLoggedIn, userName, userId)}>
      <a href={`https://connect.stripe.com/express/oauth/authorize?redirect_uri=http://buildersindependent.gq/${id}/${name}&client_id=ca_CE8A2d9pdtIwopHsbTEvkKap1Hrl1ifV`}>Take credit card payments with Stripe</a>
    </Button>
  </div>
)

const mapStateToProps = state => ({
  email: state.proLoginReducer.email,
  proLoggedIn: state.proLoginReducer.proLoggedIn,
  userName: state.proLoginReducer.userName,
  userId: state.proLoginReducer.userId,
})

export default connect(mapStateToProps)(Connect)

Connect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  proLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
}

const store = (email, proLoggedIn, userName, userId) => {
  localStorage.setItem('pro', JSON.stringify({
    email, proLoggedIn, userName, userId,
  }))
}