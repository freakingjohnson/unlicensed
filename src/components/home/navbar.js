import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { List, ListItem, ListItemText } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'

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
            <ListItem component={Link} to="/" onClick={this.handleClose}><ListItemText primary="Home" disableTypography /> </ListItem>
            <Divider />
            <ListItem component={Link} to="/signupaspro" onClick={this.handleClose}><ListItemText primary="Signup As Pro" disableTypography /></ListItem>
          </List>
        </div>)
      return (
        <div className={classes.navWrapper}>
          <div >
            <MenuIcon
              className="navButton"
              onClick={this.toggleDrawer}
            />
            <Drawer
              className={classes.list}
                        // docked={false}
              open={this.state.open}
              onClose={() => this.setState({ open: !this.state.open })}
            >
              {sideList}
            </Drawer>
          </div>
          <div className={classes.imgWrapper}>
            <img className={classes.logo}src="https://media.glassdoor.com/sql/1124953/value-services-squarelogo-1486699126101.png" alt="logo" />
          </div>
        </div>
      )
    }
}

const styles = {
  list: {
    width: '150px',
    textAlign: 'center',
  },
  logo: {
    width: '80px',
    height: '90px',
  },
  navWrapper: {
    height: '100px',
    width: '375px',
    display: 'flex',
  },
  imgWrapper: {
    height: '100px',
    width: '300px',
  },
};

export default withStyles(styles)(NavBar);