import React from 'react'
import { Typography, withStyles, Button } from 'material-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOut } from './../../ducks/reducers/proLoginReducer'

const ToolBar = ({
  classes, loggedIn, proLoggedIn, userName, userId, logOut,
}) => (
  <div>
    <div className={classes.container}>
      <Button className={classes.typography} component={Link} to="/">
        <i className="fa fa-home fa-lg" style={{ marginRight: '5px', color: '#706b66' }} aria-hidden="true" />
    Home
      </Button>
      { !loggedIn && !proLoggedIn &&
        <div className={classes.container}>
          <Button className={classes.typography} component={Link} to="/signupaspro">
            <i className="fa fa-user-plus fa-lg" style={{ marginRight: '5px', color: '#706b66' }} aria-hidden="true" />
            Become a Pro
          </Button>
          <Button className={classes.typography} component={Link} to="/loginaspro">
            <i className="fa fa-user-circle fa-lg" style={{ marginRight: '5px', color: '#706b66' }} aria-hidden="true" />
            Login as Pro
          </Button>
          <Button className={classes.typography} component={Link} to="/loginnonpro">
            <i className="fa fa-user-plus fa-lg" style={{ marginRight: '5px', color: '#706b66' }} aria-hidden="true" />
            User Login/Signup
          </Button>
        </div>
    }
      {loggedIn &&
        <div>
          <Button className={classes.typography} component={Link} to="/favorites">
            <i className="fa fa-heart fa-lg" style={{ marginRight: '5px', color: '#706b66' }} aria-hidden="true" />
            Favorites
          </Button>
        </div>
    }
      {proLoggedIn &&
        <div>
          <Button className={classes.typography} component={Link} to={`/${userId}/${userName}`}>
            <i className="fa fa-user fa-lg" style={{ marginRight: '5px', color: '#706b66' }} aria-hidden="true" />
            View Profile
          </Button>
        </div>
    }
      {(proLoggedIn || loggedIn) &&
        <div>
          <Button className={classes.typography} component={Link} to="/" onClick={() => logOut()}>
            <i className="fa fa-sign-out fa-lg" style={{ marginRight: '5px', color: '#706b66' }} aria-hidden="true" />
            Logout
          </Button>
        </div>
    }
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography: {
    textDecoration: 'none',
    fontSize: '17px',
    margin: '0 15px',
  },
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
  proLoggedIn: state.proLoginReducer.proLoggedIn,
  userName: state.proLoginReducer.userName,
  userId: state.proLoginReducer.userId,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  logOut,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ToolBar))