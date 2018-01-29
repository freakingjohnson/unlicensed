import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextField, Button, FormGroup, Paper, withStyles, Typography } from 'material-ui'
import Logo from '../../assets/Logo.png'
import { setProUserInfo, setStateProUserInfo } from '../../ducks/reducers/proLoginReducer'


const ProLogin = ({
  email, password, setProUserInfo, history, setStateProUserInfo, classes,
}) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <Paper elevation={24} className={classes.paper}>
        <img src={Logo} alt="Logo" className={classes.logo} />
        <FormGroup className={classes.form}>
          <Typography className={classes.title} type="title" color="primary">Pro Login</Typography>
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
            className={classes.textField}
            type="password"
            value={password}
            onChange={e => setProUserInfo(e)}
          />
          <Button
            raised
            color="primary"
            className={classes.button}
            disabled={!email || !password}
            onClick={() => login(email, password, setStateProUserInfo, history)}
          >
    Login
            <i className="fa fa-sign-in fa-lg" style={{ marginLeft: '15px', color: '#706b66' }} aria-hidden="true" />
          </Button>
        </FormGroup>
      </Paper>
    </div>
    <div className={classes.signUp}>
      <Typography type="body2" style={{ marginRight: '5px' }} >New User?</Typography>
      <Button raised color="inherit" style={{ marginLeft: '5px' }} component={Link} to="/signupaspro">
        Sign-up
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
  email: state.proLoginReducer.email,
  password: state.proLoginReducer.password,
})

export default connect(mapStateToProps, { setProUserInfo, setStateProUserInfo })(withStyles(styles)(ProLogin))

const login = (email, password, setStateProUserInfo, history) => {
  axios.post('api/proLogin', { email, password }).then((response) => {
    setStateProUserInfo(response.data)

    if (response.status === 200) {
      alert('Logged in successfully');
      history.push(`/${response.data.userId}/${response.data.userName}`)
    } else {
      alert('Email or password was incorrect, please try again')
    }
  })
}

ProLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setProUserInfo: PropTypes.func.isRequired,
  setStateProUserInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}