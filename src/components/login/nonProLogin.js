import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextField, Button, FormGroup, Divider, withStyles } from 'material-ui'
import Slide from 'material-ui/transitions/Slide'
import { setInfo, setStateNonProInfo } from '../../ducks/reducers/loginReducer'

const Transition = (props) => <Slide direction="left" {...props} />

const nonProLogin = ({
  email, password, setInfo, history, setStateNonProInfo, classes,
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
      className={classes.button}
      color="primary"
      disabled={!email || !password}
      onClick={() => login(email, password, setStateNonProInfo, history)}
    >
    Login
      <i className="fa fa-sign-in" style={{ marginLeft: '5px', color: '#706b66' }} aria-hidden="true"/>
    </Button>
    <Divider />
    <div>
      New User?
      <Button component={Link} to="/signup">
        Register
      </Button>
    </div>
  </div>)

  const styles = {
    button: {
      '&:hover': {
        transition: `${Transition}`
      }
    },
  }

const mapStateToProps = state => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
})

export default connect(mapStateToProps, { setInfo, setStateNonProInfo })(withStyles(styles)(nonProLogin))

const login = (email, password, setStateNonProInfo, history) => {
  axios.post('api/login', { email, password }).then((response) => {
    console.log(response)
    setStateNonProInfo(response.data)

    if (response.status === 200) {
      console.log(response.data)
      alert('Logged in successfull');
      history.push('/')
    } else {
      alert('Email or password was incorrect, please try again')
    }
  })
}

nonProLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setInfo: PropTypes.func.isRequired,
  setStateNonProInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}