import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { TextField, Button } from 'material-ui'
import { FormControl, FormHelperText, FormGroup } from 'material-ui/Form'
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
      <div className={classes.background} >

        <form onSubmit={(event) => {
          event.preventDefault()
          getSearchData(userData, this.state.search, this.state.searchBy)
          this.setState({
            search: '',
          })
          this.props.history.push('/results')
        }}
        >
          <FormGroup className={classes.form}>
            <FormGroup row className={classes.insideForm}>
              <div className={classes.textField} >
                <TextField className="search" type="text" label="Search" onChange={e => this.searchHandler(e)} value={this.state.search} />
              </div>
              <div>
                <Select
                  // MenuProps={classes={{paper: classes.selectMenu}}}
                  value={this.state.searchBy}
                  onChange={this.selectHandler}
                >
                  <MenuItem value="worktype">Worktype</MenuItem>
                  <MenuItem value="name">Name </MenuItem>
                  <MenuItem value="city"> City </MenuItem>
                  <MenuItem value="zip"> Zip </MenuItem>
                </Select>
                <FormHelperText> Search By </FormHelperText>
              </div>
            </FormGroup>
            <Button
              color="primary"
              raised
              onClick={() => {
                getSearchData(userData, this.state.search, this.state.searchBy)
                this.setState({
                  search: '',
                })
                this.props.history.push('/results')
              }}
            >Search
            </Button>
          </FormGroup>
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
    backgroundImage: "url('https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c69ee86e0cd9e8477c9bc88d60aadab6&auto=format&fit=crop&w=1650&q=80')",
    backgroundSize: 'cover',
    height: '45vh',
    position: 'relative',
  },
  form: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '75%',
    transform: 'translateY(-50%)',
    width: '95%',
    left: '2.5%',
    borderRadius: '5px',
    opacity: '.75',
  },
  insideForm: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textField: {
    marginBottom: '29px',
  },
  selectMenu: {
    backgroundColor: '#003e61',
  },
  homeWrapper: {
    height: '60vh',
    width: '100vw',
  },
}

export default connect(mapStateToProps, { getUserData, getSearchData })(withStyles(styles)(Home))