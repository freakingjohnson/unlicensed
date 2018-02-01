import React from 'react'
import { withStyles, CircularProgress } from 'material-ui'
import Icon from '../../assets/Icon.png'

const size = window.innerWidth >= 769

const Loader = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <CircularProgress className={classes.progress} size={size ? 400 : 200} thickness={2} />
      <img className={classes.image} src={Icon} alt="icon" />
    </div>
  </div>
)

const styles = {
  container: {
    height: '74vh',
  },
  wrapper: {
    position: 'relative',
    left: '25%',
    top: '25%',
    '@media (min-width: 769px)': {
      left: '40%',
      top: '20%',
    },
  },
  progress: {
    position: 'absolute',
  },
  image: {
    position: 'absolute',
    marginLeft: '48px',
    marginTop: '50px',
    mixBlendMode: 'multiply',
    '@media (min-width: 769px)': {
      height: '20vh',
      marginLeft: '95px',
      marginTop: '100px',
    },
  },
}

export default withStyles(styles)(Loader)