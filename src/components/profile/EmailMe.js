import React from 'react'
import { TextField, FormGroup, Button } from 'material-ui'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { formInfo } from './../../ducks/reducers/emailReducer'

const EmailMe = ({
  formInfo, email, name, subject, phone, message, proName, proEmail,
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
    <div>
      <h2>{`Send ${proName} an Email!`}</h2>
      <FormGroup>
        <TextField name="name" label="Your Name" value={name} onChange={e => formInfo(e)} />
        <TextField name="phone" label="Your Phone Number" value={phone} onChange={e => formInfo(e)} />
        <TextField name="email" label="Your Email" value={email} onChange={e => formInfo(e)} />
        <TextField name="subject" label="Email Subject" value={subject} onChange={e => formInfo(e)} />
        <TextField name="message" label="Message" value={message} onChange={e => formInfo(e)} />
      </FormGroup>
      <Button raised onClick={() => sendEmail(emailContent)}>Send Email</Button>
    </div>
  )
}

const mapStateToProps = state => ({
  email: state.emailReducer.email,
  name: state.emailReducer.name,
  subject: state.emailReducer.name,
  phone: state.emailReducer.phone,
  message: state.emailReducer.message,
})

export default connect(mapStateToProps, { formInfo })(EmailMe)

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
    console.log(res)
  })
}
