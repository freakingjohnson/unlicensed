import React from 'react'
import { List, ListItem, ListItemText, withStyles, ListItemIcon, Divider } from 'material-ui'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Icon from './../../assets/Icon.png'
import { logOut } from '../../ducks/reducers/proLoginReducer'

const SideList = ({
  classes, loggedIn, proLoggedIn, userId, userName, handleClose, logOut, history,
}) => (
  <div className={classes.list}>
    <List>
      <ListItem className={classes.iconWrapper}>
        <img src={Icon} alt="icon" className={classes.icon} />
      </ListItem>
      <Divider />
      <ListItem button className={classes.listItem} component={Link} to="/" onClick={handleClose}>
        <ListItemIcon>
          <i className="fa fa-home fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
        </ListItemIcon>
        <ListItemText className={classes.listText} primary="Home" disableTypography />
      </ListItem>
      <Divider />
      { !loggedIn && !proLoggedIn &&
        <div>
          <ListItem button className={classes.listItem} component={Link} to="/signupaspro" onClick={handleClose}>
            <ListItemIcon>
              <i className="fa fa-user-plus fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Become a Pro" disableTypography />
          </ListItem>
          <Divider />
          <ListItem button className={classes.listItem} component={Link} to="/loginaspro" onClick={handleClose}>
            <ListItemIcon>
              <i className="fa fa-user-circle fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Login As Pro" disableTypography />
          </ListItem>
          <Divider />
          <ListItem button className={classes.listItem} component={Link} to="/loginnonpro" onClick={handleClose} style={{ marginBottom: '10px' }}>
            <ListItemIcon>
              <i className="fa fa-user-circle-o fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="User Login/Signup" disableTypography />
          </ListItem>
          <Divider />
        </div>
      }
      {
        loggedIn &&
        <div>
          <ListItem button className={classes.listItem} component={Link} to="/favorites" onClick={handleClose}>
            <ListItemIcon>
              <i className="fa fa-heart fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Favorites" disableTypography />
          </ListItem>
          <Divider />
        </div>
      }
      {
        proLoggedIn &&
        <div>
          <ListItem button className={classes.listItem} component={Link} to={`/${userId}/${userName}`} onClick={handleClose}>
            <ListItemIcon>
              <i className="fa fa-user fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="View Profile" disableTypography />
          </ListItem>
          <Divider />
        </div>
      }
      {
        (proLoggedIn || loggedIn) &&
        <div>
          <ListItem button component={Link} to="/" onClick={() => { handleClose(); logOut() }}>
            <ListItemIcon>
              <i className="fa fa-sign-out fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Logout" disableTypography />
          </ListItem>
          <Divider />
        </div>
      }
    </List>
  </div>
)

const styles = {
  listItem: {
    margin: '10px 0',
  },
  listText: {
    fontSize: '20px',
    color: '#706b66',
  },
  itemIcon: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '35px',
  },
};

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
  proLoggedIn: state.proLoginReducer.proLoggedIn,
  userName: state.proLoginReducer.userName,
  userId: state.proLoginReducer.userId,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  logOut,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideList))