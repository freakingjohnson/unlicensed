import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { TextField, Button } from 'material-ui'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles'
import { getUserData, getSearchData } from './../../ducks/reducers/resultsReducer'

class Home extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userData: PropTypes.array,
    getSearchData: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    userData: ['name', 'email', 'location'],
  }

  state= {
    search: '',
    searchBy: 'worktype',
  }

  searchHandler(e) {
    this.setState({ search: e.target.value })
  }

  selectHandler = (e) => {
    this.setState({ searchBy: e.target.value })
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
          getSearchData(userData, this.state.search, this.state.searchBy)
          this.setState({
            search: '',
          })
          this.props.history.push('/results')
        }}
        >
          <TextField className="search" type="text" onChange={e => this.searchHandler(e)} value={this.state.search} />
          <FormControl>
            <Select
              value={this.state.searchBy}
              onChange={this.selectHandler}
            >
              <MenuItem value="worktype">Worktype</MenuItem>
              <MenuItem value="name">Name </MenuItem>
              <MenuItem value="city"> City </MenuItem>
              <MenuItem value="zip"> Zip </MenuItem>
            </Select>
            <FormHelperText> Search By </FormHelperText>
          </FormControl>
          <Button
            raised
            className="searchButton"
            onClick={() => {
          getSearchData(userData, this.state.search, this.state.searchBy)
          this.setState({
            search: '',
          })
          this.props.history.push('/results')
          }}
          >Search
          </Button>
        </form>
        { homeView }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
  searchData: state.resultsReducer.searchData,
})

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
