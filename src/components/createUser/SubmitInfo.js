import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'material-ui'
import { withRouter } from 'react-router-dom'

const SubmitInfo = ({
  userReducer, serviceReducer, projectReducer, history,
}) => {
  const profileInfo = [userReducer, serviceReducer, projectReducer]
  return (
    <Button raised color="primary" onClick={() => send(profileInfo, history)}>Finish</Button>
  )
}

const mapStateToProps = state => ({
  userReducer: state.userReducer,
  serviceReducer: state.serviceReducer,
  projectReducer: state.projectReducer,
})

export default withRouter(connect(mapStateToProps)(SubmitInfo))

const send = (profileInfo, history) => {
  axios.post('api/addUser', profileInfo).then((res) => {
    console.log(res)
  })
  history.push('/')
}

SubmitInfo.propTypes = {
  userReducer: PropTypes.object.isRequired,
  serviceReducer: PropTypes.object.isRequired,
  projectReducer: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}