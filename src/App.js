import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import router from './router/router'
import Navbar from './components/home/navbar'
import { getUserData } from './ducks/reducers/resultsReducer'


class App extends Component {
  static propTypes = {
    getUserData: PropTypes.func.isRequired,
    userData: PropTypes.array,
  }

  static defaultProps = {
    userData: ['name', 'email', 'location'],
  }

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

export default withRouter(connect(mapStateToProps, { getUserData })(App))