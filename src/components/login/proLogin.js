import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextField, Button, Divider } from 'material-ui'
import { setProUserInfo, setStateProUserInfo } from '../../ducks/reducers/proLoginReducer'


const ProLogin = ({
  email, password, setProUserInfo, setStateProUserInfo,
}) => (
  <div> Enter your email and password
    <form name="loginForm">
      <TextField
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={e => setProUserInfo(e)}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={e => setProUserInfo(e)}
      />
    </form>
    <Button raised color="primary" disabled={!email || !password} onClick={() => login(email, password, setStateProUserInfo)} >Login</Button>
    <Divider />
    <div>
      New User?
      <Button component={Link} to="/signupaspro">
        Sign-up
      </Button>
    </div>
  </div>)

const mapStateToProps = state => ({
  email: state.proLoginReducer.email,
  password: state.proLoginReducer.password,
})

export default connect(mapStateToProps, { setProUserInfo, setStateProUserInfo })(ProLogin)

const login = (email, password, setStateProUserInfo) => {
  axios.post('api/proLogin', { email, password }).then((response) => {
    console.log(response)
    setStateProUserInfo(response.data)

    if (response.status === 200) {
      console.log(response.data)
      alert('Logged in successfull');
      window.location.href = `http://localhost:3000/${response.data.userId}/${response.data.userName}`
    } else {
      alert('Email or password was incorrect, please try again')
    }
  })
}

ProLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setProUserInfo: PropTypes.func.isRequired,
}