import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Avatar } from 'material-ui'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'

const ReviewUser = ({
  firstName, lastName, phone, text, both, profilePic, picName, email, bio, location,
}) => (
  <div>
    <h2>Personal Info</h2>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>{firstName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Last Name</TableCell>
          <TableCell>{lastName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Zip Code</TableCell>
          <TableCell>{location}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Phone Number</TableCell>
          <TableCell>{phone}</TableCell>
          <TableCell>{both ? 'Text and Call' : (text ? 'Text only' : 'Call only')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Profile Picture</TableCell>
          <TableCell>
            <Avatar src={profilePic} />
          </TableCell>
          <TableCell>{picName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>{email}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bio</TableCell>
          <TableCell>{bio}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

const mapStateToProps = state => ({
  firstName: state.userReducer.firstName,
  lastName: state.userReducer.lastName,
  phone: state.userReducer.phone,
  text: state.userReducer.text,
  call: state.userReducer.call,
  both: state.userReducer.both,
  profilePic: state.userReducer.profilePic,
  picName: state.userReducer.picName,
  email: state.userReducer.email,
  bio: state.userReducer.bio,
  location: state.userReducer.location,
})


export default connect(mapStateToProps)(ReviewUser)

ReviewUser.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  text: PropTypes.bool.isRequired,
  both: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  picName: PropTypes.string.isRequired,
}