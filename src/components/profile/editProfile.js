import React from 'react'
import { TextField, Checkbox, FormGroup, Button, Avatar, FormControlLabel, Paper, Typography, withStyles } from 'material-ui'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import axios from 'axios'
import Dropzone from 'react-dropzone'
import { personalInfo, setProfilePic, checkBoxes } from './../../ducks/reducers/userReducer'

let proLoggedIn = true

const EditProfile = ({
  userData, userReducer, match, personalInfo, setProfilePic, checkBoxes, classes,
}) => {
  const selectedUser = userData.filter((user) => {
    if (user.id === (match.params.id * 1)) {
      return user
    }
  })

  const user = selectedUser[0],
    {
      firstName, lastName, phone, text, call, both, email, bio, location, profilePic, picName, profilePicUrl,
    } = userReducer

  let userPhone;
  if (user) {
    userPhone = user.phone.replace(/[{}"]+/g, '').split(',')
  }

  let updatedInfo;
  if (user) {
    updatedInfo = {
      firstName: firstName ? firstName : user.first_name,
      lastName: lastName ? lastName : user.last_name,
      phone: phone ? phone : userPhone[0],
      call,
      text,
      both,
      email: email ? email : user.email,
      bio: bio ? bio : user.bio_info,
      location: location ? location : user.location,
      profilePicUrl: profilePicUrl ? profilePicUrl : user.profile_photo,
      id: user.id,
    }
  }

  return (
    <div className={classes.container}>
      {
    proLoggedIn && selectedUser.length > 0 &&
    <div className={classes.wrapper}>
      <Paper elevation={24} className={classes.paper} >
        <Typography className={classes.title} color="primary" type="headline">Edit your profile!</Typography>
        <FormGroup className={classes.form}>
          <TextField label="First Name" name="firstName" helperText={user.first_name} value={firstName} onChange={e => personalInfo(e)} />
          <TextField label="Last Name" name="lastName" helperText={user.last_name} value={lastName} onChange={e => personalInfo(e)} />
          <TextField label="Phone Number" name="phone" helperText={userPhone[0]} value={phone} onChange={e => personalInfo(e)} />
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox name="call" checked={call} onClick={e => checkBoxes(e, call)} />
            }
              label="Call"
            />
            <FormControlLabel
              control={
                <Checkbox name="text" checked={text} onClick={e => checkBoxes(e, text)} />
            }
              label="Text"
            />
            <FormControlLabel
              control={
                <Checkbox name="both" checked={both} onClick={e => checkBoxes(e, both)} />
            }
              label="Both"
            />
          </FormGroup>
          <TextField label="Email" name="email" helperText={user.email} value={email} onChange={e => personalInfo(e)} />
          <TextField label="Bio" name="bio" helperText={user.bio_info} value={bio} onChange={e => personalInfo(e)} />
          <TextField label="Zip Code" name="location" helperText={user.location.split(' ')[2]} value={location} onChange={e => personalInfo(e)} />
          {picName &&
          <h2>{picName}</h2>}
          <Avatar className={classes.avatar} src={profilePic ? profilePic : user.profile_photo} />
          <Dropzone multiple={false} accept="image/*" onDrop={e => setProfilePic(e[0])} />
          <Button className={classes.button} raised color="accent" onClick={() => updateInfo(updatedInfo)}>Save Changes</Button>
        </FormGroup>
      </Paper>
    </div>
    }
    </div>
  )
}

const styles = {
  container: {
    background: 'radial-gradient(black, #9e9994, #cfcac4, #fffdf7)',
    height: '149vh',
  },
  wrapper: {
    display: 'flex',
  },
  paper: {
    width: '90%',
    height: '137vh',
    marginLeft: '5%',
    marginTop: '10%',
  },
  title: {
    textAlign: 'center',
    marginTop: '15px',
    marginBottom: '-30px',
  },
  form: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '10%',
  },
  avatar: {
    height: 100,
    width: 100,
    margin: '15px',
  },
  button: {
    margin: '20px 0',
  },
}

const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
  userReducer: state.userReducer,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  personalInfo,
  setProfilePic,
  checkBoxes,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditProfile))

EditProfile.propTypes = {
  userData: PropTypes.array.isRequired,
  userReducer: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  personalInfo: PropTypes.func.isRequired,
  setProfilePic: PropTypes.func.isRequired,
  checkBoxes: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

const updateInfo = (info) => {
  axios.put('http://localhost:4000/api/updateUser', info).then(() => {
  })
}
