import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextField, Button, FormGroup, Paper, withStyles, Typography } from 'material-ui'
import { Link } from 'react-router-dom';
import { setInfo, send } from '../../ducks/reducers/loginReducer'

const nonProSignup = ({
  email, password, verifyPassword, firstName, lastName, zipCode, setInfo, history, send, classes,
}) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <Paper elevation={24} className={classes.paper}>
        <FormGroup className={classes.form}>
          <Typography type="title" color="primary" className={classes.title}>Sign Up</Typography>
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
            className={classes.textField}
            error={password !== verifyPassword}
            value={verifyPassword}
            onChange={e => setInfo(e)}
          />
          <Button
            raised
            color="primary"
            disabled={!email || !password || !verifyPassword || password !== verifyPassword}
            onClick={() => send(firstName, lastName, zipCode, email, password, history)}
          >
    Sign Up
          </Button>
        </FormGroup>
      </Paper>
    </div>
    <div className={classes.signUp}>
      <Typography type="body2" style={{ marginRight: '5px' }}>Already Registered?</Typography>
      <Button raised color="inherit" style={{ marginLeft: '5px' }} component={Link} to="/loginnonpro">
        Login
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
    '@media (min-width: 769px)': {
      width: '60%',
      marginLeft: '20%',
      marginTop: '2%',
      height: '60vh',
    },
  },
  form: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '10%',
    '@media (min-width: 769px)': {
      width: '60%',
      margin: '6% 0 0 20%',
    },
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
  firstName: state.loginReducer.firstName,
  lastName: state.loginReducer.lastName,
  zipCode: state.loginReducer.zipCode,
  email: state.loginReducer.email,
  password: state.loginReducer.password,
  verifyPassword: state.loginReducer.verifyPassword,
})

export default connect(mapStateToProps, { setInfo, send })(withStyles(styles)(nonProSignup))

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