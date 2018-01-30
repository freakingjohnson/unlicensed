import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { TextField, Button, FormHelperText, FormGroup, MenuItem, Select, withStyles } from 'material-ui'
import axios from 'axios'
import { getUserData, getSearchData } from './../../ducks/reducers/resultsReducer'
import HomeFront from './HomeFront'
import WebsiteReview from '../websiteReview/WebsiteReview'
import { resetFromLocalStorage } from './../../ducks/reducers/proLoginReducer'

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

  componentDidMount() {
    const { location, resetFromLocalStorage } = this.props
    if (location.search) {
      resetFromLocalStorage()
      let pro = localStorage.getItem('pro')
      pro = JSON.parse(pro)
      console.log(pro.email)
      this.finalizeAccount(location.search, pro.email)
    }
  }

  finalizeAccount = (query, email) => {
    const code = query.split('').splice(6).join('')
    axios.post('http://localhost:4000/api/addStripe', { code, email }).then((res) => {
      console.log(res)
    })
  }


  searchHandler = (e) => {
    this.setState({ search: e.target.value })
  }

  selectHandler = (e) => {
    this.setState({ searchBy: e.target.value })
  }

  render() {
    const {
      classes, userData, getSearchData, history,
    } = this.props;

    return (
      <div>
        <div className={classes.background} >
          <form onSubmit={(event) => {
          event.preventDefault()
          getSearchData(userData, this.state.search, this.state.searchBy)
          this.setState({
            search: '',
          })
          history.push('/results')
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
                history.push('/results')
              }}
              >Search
              </Button>
            </FormGroup>
          </form>
          <div className={classes.homeWrapper} />
        </div>
        <WebsiteReview />
        <HomeFront history={history} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
  searchData: state.resultsReducer.searchData,
  email: state.proLoginReducer.email,
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

export default connect(mapStateToProps, { getUserData, getSearchData, resetFromLocalStorage })(withStyles(styles)(Home))

