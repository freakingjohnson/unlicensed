import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextField, Button, FormGroup, withStyles, Paper, Typography } from 'material-ui'
import Logo from '../../assets/Logo.png'
import { setInfo, setStateNonProInfo } from '../../ducks/reducers/loginReducer'

const nonProLogin = ({
  email, password, setInfo, history, setStateNonProInfo, classes, loggedIn,
}) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <Paper elevation={24} className={classes.paper}>
        <img src={Logo} alt="Logo" className={classes.logo} />
        <FormGroup className={classes.form}>
          <Typography className={classes.title} type="title" color="primary">Login</Typography>
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
            className={classes.textField}
            type="password"
            value={password}
            onChange={e => setInfo(e)}
          />
          <Button
            raised
            className={classes.button}
            color="primary"
            disabled={!email || !password}
            onClick={() => login(email, password, setStateNonProInfo, history)}
          >
    Login
            <i className="fa fa-sign-in fa-lg" style={{ marginLeft: '15px', color: '#706b66' }} aria-hidden="true" />
          </Button>
        </FormGroup>
      </Paper>
    </div>
    <div className={classes.signUp}>
      <Typography type="body2" style={{ marginRight: '5px' }} >New User?</Typography>
      <Button raised color="inherit" style={{ marginLeft: '5px' }} component={Link} to="/signup">
        Sign Up!
      </Button>
    </div>
  </div>
)

const styles = {
  container: {
    background: 'radial-gradient(black, #9e9994, #cfcac4, #fffdf7)',
  },
  wrapper: {
    display: 'flex',
  },
  paper: {
    width: '90%',
    height: '62vh',
    marginLeft: '5%',
    marginTop: '10%',
  },
  logo: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '10%',
    mixBlendMode: 'multiply',
  },
  form: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '10%',
  },
  title: {
    textAlign: 'center',
  },
  button: {
    fontSize: '20px',
  },
  textField: {
    marginBottom: '15px',
  },
  signUp: {
    padding: '15px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
      alert('Log in successful');
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