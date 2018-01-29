import React from 'react'
import { TextField, Button, Paper, withStyles, Typography, withTheme } from 'material-ui'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { formInfo } from './../../ducks/reducers/emailReducer'

const EmailMe = ({
  formInfo, email, name, subject, phone, message, proName, proEmail, classes,
}) => {
  const emailContent = {
    proEmail,
    email,
    name,
    subject,
    phone,
    message,
  }

  return (
    <div className={classes.wrapper}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.title} type="title" color="primary">{`Send ${proName} an Email!`}</Typography>
        <TextField name="name" label="Your Name" value={name} onChange={e => formInfo(e)} />
        <TextField name="phone" label="Your Phone Number" value={phone} onChange={e => formInfo(e)} />
        <TextField name="email" label="Your Email" value={email} onChange={e => formInfo(e)} />
        <TextField name="subject" label="Email Subject" value={subject} onChange={e => formInfo(e)} />
        <TextField multiline rows={4} name="message" label="Message" value={message} onChange={e => formInfo(e)} />
        <Button className={classes.button} raised color="primary" onClick={() => sendEmail(emailContent)}>Send Email</Button>
      </Paper>
    </div>
  )
}

const styles = {
  wrapper: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: '95%',
    right: '2.5%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    marginTop: '15px',
  },
  button: {
    marginTop: '10px',
    height: '20px',
  },
}

const mapStateToProps = state => ({
  email: state.emailReducer.email,
  name: state.emailReducer.name,
  subject: state.emailReducer.subject,
  phone: state.emailReducer.phone,
  message: state.emailReducer.message,
})

export default connect(mapStateToProps, { formInfo })(withTheme()(withStyles(styles)(EmailMe)))

EmailMe.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  proName: PropTypes.string.isRequired,
  proEmail: PropTypes.string.isRequired,
  formInfo: PropTypes.func.isRequired,
}

const sendEmail = (email) => {
  axios.post('api/sendEmail', email).then((res) => {
  })
}
