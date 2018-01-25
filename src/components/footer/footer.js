import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui'
import Social from './social'
import Copyright from './copyright'

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <Social />
    <Copyright />
    <Link to="/privacy-policy" style={{ color: '#003e61' }}>Privacy Policy</Link>
  </div>
)

const styles = {
  footer: {
    backgroundColor: '#706b66',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    height: '20vh',
    width: '100%',
  },
  link: {

  },
}

export default withStyles(styles)(Footer)