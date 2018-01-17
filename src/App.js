import React from 'react';
import { connect } from 'react-redux'
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

export default connect(mapStateToProps, { getUserData })(App)
