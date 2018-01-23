import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextField, Button, FormGroup } from 'material-ui'
import { setInfo, send } from '../../ducks/reducers/loginReducer'

const nonProSignup = ({
  email, password, verifyPassword, firstName, lastName, zipCode, setInfo, history, send,
}) => (
  <div> Enter your email and password
    <FormGroup>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={e => setInfo(e)}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={e => setInfo(e)}
      />
      <TextField
        label="Zip Code"
        name="zipCode"
        type="number"
        value={zipCode}
        onChange={e => setInfo(e)}
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={e => setInfo(e)}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={e => setInfo(e)}
      />
      <TextField
        label="Verify Password"
        name="verifyPassword"
        type="password"
        error={password !== verifyPassword}
        value={verifyPassword}
        onChange={e => setInfo(e)}
      />
    </FormGroup>
    <Button
      raised
      color="primary"
      disabled={!email || !password || !verifyPassword || password !== verifyPassword}
      onClick={() => send(firstName, lastName, zipCode, email, password, history)}
    >
    Signup
    </Button>
  </div>
)

const mapStateToProps = state => ({
  firstName: state.loginReducer.firstName,
  lastName: state.loginReducer.lastName,
  zipCode: state.loginReducer.zipCode,
  email: state.loginReducer.email,
  password: state.loginReducer.password,
  verifyPassword: state.loginReducer.verifyPassword,
})

export default connect(mapStateToProps, { setInfo, send })(nonProSignup)

nonProSignup.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifyPassword: PropTypes.string.isRequired,
  setInfo: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}