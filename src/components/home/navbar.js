import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Drawer, Divider, withStyles, AppBar, Toolbar, IconButton, withTheme, ListItemIcon } from 'material-ui';
import { Menu } from 'material-ui-icons'
import { Link } from 'react-router-dom'
import Logo from './../../assets/Logo.png'
import Icon from './../../assets/Icon.png'

class NavBar extends React.Component {
    static propTypes = {
      classes: PropTypes.object.isRequired,
    };

    state = {
      open: false,
    }

    toggleDrawer = () => this.setState({ open: !this.state.open })

    handleClose = () => this.setState({ open: false })

    render() {
      const { classes } = this.props;

      const sideList = (
        <div className={classes.list}>
          <List>
            <ListItem className={classes.iconWrapper}>
              <img src={Icon} alt="icon" className={classes.icon} />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} component={Link} to="/" onClick={this.handleClose}>
              <ListItemIcon>
                <i className="fa fa-home fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary="Home" disableTypography />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} component={Link} to="/signupaspro" onClick={this.handleClose}>
              <ListItemIcon>
                <i className="fa fa-user-plus fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary="Become a Pro" disableTypography />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} component={Link} to="/loginaspro" onClick={this.handleClose}>
              <ListItemIcon>
                <i className="fa fa-user-circle fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary="Login As Pro" disableTypography />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} component={Link} to="/loginnonpro" onClick={this.handleClose} style={{ marginBottom: '10px' }}>
              <ListItemIcon>
                <i className="fa fa-user-circle-o fa-lg" style={{ marginBottom: '-10px', marginRight: '-10px', color: '#003e61' }} aria-hidden="true" />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary="User Login/Signup" disableTypography />
            </ListItem>
            <Divider />
          </List>
        </div>)
      return (
        <div className={classes.root}>
          <AppBar position="static" >
            <Toolbar className={classes.toolBar} >
              <div>
                <IconButton onClick={this.toggleDrawer} className={classes.left}>
                  <Menu className={classes.menu} />
                </IconButton>
                <Drawer
                  className={classes.list}
                  open={this.state.open}
                  onClose={() => this.setState({ open: !this.state.open })}
                >
                  {sideList}
                </Drawer>
              </div>
              <img className={classes.logo} src={Logo} alt="logo" />
            </Toolbar>
          </AppBar>
        </div>
      )
    }
}

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    marginBottom: '0px',
  },
  list: {
    width: '200px',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  listItem: {
    margin: '10px 0'
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
  logo: {
    height: '50px',
    mixBlendMode: 'multiply',
  },
  toolBar: {
    paddingLeft: '0px',
    paddingRight: '0px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  menu: {
    fontSize: '32px',
    color: '#706b66',
  },
};

export default withTheme()(withStyles(styles)(NavBar));