import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import { connect } from 'react-redux'
import { TextField, Button, FormGroup } from 'material-ui'
import { setInfo } from '../../ducks/reducers/loginReducer'

const nonProSignup = ({
  loginReducer, email, password, verifyPassword, setInfo, history,
}) => {
  const nonProInfo = loginReducer
  return (
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
        onClick={() => send(email, password, history)}
      >
    Signup
      </Button>
    </div>
  )
}

const send = (email, password, history) => {
  axios.post('api/addNonPro', { email, password }).then((res) => {
    // console.log(res)
  })
  history.push('/')
}

const mapStateToProps = state => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
  verifyPassword: state.loginReducer.verifyPassword,
})

export default connect(mapStateToProps, { setInfo })(nonProSignup)

nonProSignup.propTypes = {
  loginReducer: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifyPassword: PropTypes.string.isRequired,
  setInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}