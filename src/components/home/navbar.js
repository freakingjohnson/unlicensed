import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, withStyles, AppBar, Toolbar, IconButton } from 'material-ui';
import { Menu } from 'material-ui-icons'
import { connect } from 'react-redux'
import Logo from './../../assets/Logo.png'
import SideList from './SideList'

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
                  <SideList handleClose={this.handleClose}/>
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

export default withStyles(styles)(NavBar)