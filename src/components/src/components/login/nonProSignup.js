import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextField, Button, FormGroup } from 'material-ui'
import { setInfo } from '../../ducks/reducers/loginReducer'

const nonProSignup = ({
  email, password, verifyPassword, setInfo,
}) => (
  <div> Enter your email and password
    <FormGroup>
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
        maxLength="4"
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
    >
    Signup
    </Button>
  </div>
)

const mapStateToProps = state => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
  verifyPassword: state.loginReducer.verifyPassword,
})

export default connect(mapStateToProps, { setInfo })(nonProSignup)

nonProSignup.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifyPassword: PropTypes.string.isRequired,
  setInfo: PropTypes.func.isRequired,
}