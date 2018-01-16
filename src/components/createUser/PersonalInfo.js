import React from 'react'
import { connect } from 'react-redux'
import { TextField, Checkbox } from 'material-ui'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import PropTypes from 'prop-types'
import { personalInfo } from './../../ducks/reducers/userReducer'

const PersonalInfo = ({
  firstName, lastName, phone, text, call, both, email, bio, personalInfo,
}) => (
  <div>
    <h3>Step 1: Tell us about yourself...</h3>
    <FormGroup>
      <TextField label="First Name" name="firstName" value={firstName} onChange={e => personalInfo(e)} />
      <TextField label="Last Name" name="lastName" value={lastName} onChange={e => personalInfo(e)} />
      <TextField label="Phone Number" name="phone" value={phone} onChange={e => personalInfo(e)} />
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox label="Text" name="text" checked={text} onClick={e => personalInfo(e, text)} />
        }
          label="Text"
        />
        <FormControlLabel
          control={
            <Checkbox label="Call" name="call" checked={call} onClick={e => personalInfo(e, call)} />
        }
          label="Call"
        />
        <FormControlLabel
          control={
            <Checkbox label="Both" name="both" checked={both} onClick={e => personalInfo(e, both)} />
        }
          label="Both"
        />
      </FormGroup>
      <TextField label="Email" name="email" value={email} onChange={e => personalInfo(e)} />
      <TextField multiline label="Bio" name="bio" value={bio} onChange={e => personalInfo(e)} />
    </FormGroup>
  </div>
)

const mapStateToProps = state => ({
  firstName: state.userReducer.firstName,
  lastName: state.userReducer.lastName,
  phone: state.userReducer.phone,
  text: state.userReducer.text,
  call: state.userReducer.call,
  both: state.userReducer.both,
  email: state.userReducer.email,
  bio: state.userReducer.bio,
})


export default connect(mapStateToProps, { personalInfo })(PersonalInfo)

PersonalInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  text: PropTypes.bool.isRequired,
  call: PropTypes.bool.isRequired,
  both: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  personalInfo: PropTypes.func.isRequired,
}