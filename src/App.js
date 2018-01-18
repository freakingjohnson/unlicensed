import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import router from './router/router'
import Navbar from './components/home/navbar'
import { getUserData } from './ducks/reducers/resultsReducer'

class App extends React.Component {
  componentDidMount() {
    this.props.getUserData(this.props.userData)
  }
  render() {
    return (
      <div>
        <Navbar />
        { router }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
})

App.propTypes = {
  getUserData: PropTypes.func.isRequired,
  userData: PropTypes.array,
}

App.defaultProps = {
  userData: undefined,
}
export default withRouter(connect(mapStateToProps, { getUserData })(App))
