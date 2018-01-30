import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import router from './router/router'
import Navbar from './components/home/navbar'
import Footer from './components/footer/footer'
import { getUserData, getReviews } from './ducks/reducers/resultsReducer'

class App extends Component {
  static propTypes = {
    getUserData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      usersLoaded, getUserData, reviewsLoaded, getReviews,
    } = this.props
    if (!reviewsLoaded) {
      getReviews()
    }
    if (!usersLoaded) {
      getUserData()
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        { router }
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  usersLoaded: state.resultsReducer.userDataLoaded,
  reviewsLoaded: state.resultsReducer.reviewsLoaded,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserData,
  getReviews,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))