import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui'
import Icon from '../../assets/Icon.png'

const Loader = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <CircularProgress className={classes.progress} size={200} thickness={2} />
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
  },
  progress: {
    position: 'absolute',
  },
  image: {
    position: 'absolute',
    marginLeft: '48px',
    marginTop: '50px',
    mixBlendMode: 'multiply',
  },
}

export default withStyles(styles)(Loader)