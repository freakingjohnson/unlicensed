import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { getUserData, getSearchData } from './../../ducks/reducers/resultsReducer'
import Results from './../results/Results'

class Home extends React.Component {
  state= {
    search: '',
  }

  searchHandler(e) {
    this.setState({ search: e.target.value })
  }

  render() {
    const { classes, userData, getSearchData } = this.props;

    const homeView = (
      <div className={classes.homeWrapper} />
    )
    return (
      <div>

        <form onSubmit={(event) => {
          event.preventDefault()
          getSearchData(userData, this.state.search)
          this.setState({
            search: '',
          })
          this.props.history.push('/results')
}}
        >
          <input className="search" type="text" onChange={this.searchHandler.bind(this)} value={this.state.search} />
          <button className="searchButton">Search</button>
        </form>
        { homeView }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.resultsReducer.userData,
    searchData: state.resultsReducer.searchData,
  }
}

const styles = {
  background: {
    height: '60vh',
    width: '100vw',
  },
  homeWrapper: {
    height: '60vh',
    width: '100vw',
  },
}

export default withStyles(styles)(connect(mapStateToProps, { getUserData, getSearchData })(Home))

