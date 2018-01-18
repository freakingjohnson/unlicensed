import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { getUserData, searchData } from './../../ducks/reducers/resultsReducer'
import Results from './../results/Results'

const styles = {
  background: {
    height: '60vh',
    width: '100vw',
  },
}

class Home extends React.Component {
  state= {
    search: '',
  }

 searchHandler=(e) => {
   this.setState({ search: e.target.value })
 }


 render() {
   const { classes, userData, searchData } = this.props;

   const homeView = (
     <div />
   )
   return (
     <div>
       { homeView }
       <form onSubmit={(event) => {
         event.preventDefault()
         searchData(userData, this.state.search)
        }}
       >
         <input className="search" type="text" onChange={this.searchHandler} value={this.state.search} />
         <button className="searchButton">Search</button>
       </form>
       <Results />
     </div>
   )
 }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.array.isRequired,
  searchData: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    userData: state.resultsReducer.userData,
    searchData: state.resultsReducer.searchData,
  }
}

export default withStyles(styles)(connect(mapStateToProps, { getUserData, searchData })(Home))