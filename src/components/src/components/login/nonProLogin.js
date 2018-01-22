import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { TextField, Button, FormGroup, Divider } from 'material-ui'
import { setInfo } from '../../ducks/reducers/loginReducer'

const nonProLogin = ({
  email, password, setInfo,
}) => (
  <div> Enter your email and password
    <form name="loginForm">
      <TextField
        label="Email"
        name="email"
        type="email"
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
    </form>
    <Button raised color="primary" disabled={!email || !password}>Login</Button>
    <Divider />
    <div>
      New User?
      <Button component={Link} to="/signup">
        Sign-up
      </Button>
    </div>
  </div>)

const mapStateToProps = state => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
})

export default connect(mapStateToProps, { setInfo })(nonProLogin)

nonProLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setInfo: PropTypes.func.isRequired,
}