import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { getUserData } from './../../ducks/reducers/resultsReducer'
import Results from './../results/Results'

const styles = {
  background: {
    height: '60vh',
    width: '100vw',
  },
}

class Home extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state= {
    search: '',
  }

  searchHandler(e) {
    this.setState({ search: e.target.value })
  }


  render() {
    const { classes } = this.props;

    const homeView = (
      <div />
    )
    return (
      <div>
        { homeView }
        <form onSubmit={event => getUserData}>
          <input className="search" type="text" onChange={this.searchHandler.bind(this)} value={this.state.search} />
          <button className="searchButton">Search</button>
        </form>
        <Results />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default withStyles(styles)(connect(mapStateToProps, { getUserData })(Home))
// export default withStyles(styles)(Home);