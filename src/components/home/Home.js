import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles'

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
        <form onSubmit={(event) => {
          this.getUsers(event)
 }}
        >
          <input className="search" type="text" onChange={this.searchHandler.bind(this)} value={this.state.search} />
          <button className="searchButton">Search</button>
        </form>

      </div>
    )
  }
}
export default withStyles(styles)(Home);