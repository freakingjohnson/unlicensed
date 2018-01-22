import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'material-ui'

const SubmitInfo = ({ userReducer, serviceReducer, projectReducer }) => {
  const profileInfo = [userReducer, serviceReducer, projectReducer]
  return (
    <Button onClick={() => send(profileInfo)}>Submit</Button>
  )
}

const mapStateToProps = state => ({
  userReducer: state.userReducer,
  serviceReducer: state.serviceReducer,
  projectReducer: state.projectReducer,
})

export default connect(mapStateToProps)(SubmitInfo)

const send = (profileInfo) => {
  axios.post('api/addUser', profileInfo).then((res) => {
    console.log(res)
  })
}

SubmitInfo.propTypes = {
  userReducer: PropTypes.object.isRequired,
  serviceReducer: PropTypes.object.isRequired,
  projectReducer: PropTypes.object.isRequired,
}