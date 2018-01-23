import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { TextField, Button, FormGroup, Divider } from 'material-ui'
import { setInfo, login } from '../../ducks/reducers/loginReducer'

const nonProLogin = ({
  email, password, setInfo, login, history,
}) => (
  <div> Enter your email and password
    <FormGroup>
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
    </FormGroup>
    <Button
      raised
      color="primary"
      disabled={!email || !password}
      onClick={() => login(email, password, history)}
    >
    Login
    </Button>
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

export default connect(mapStateToProps, { setInfo, login })(nonProLogin)

nonProLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setInfo: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}