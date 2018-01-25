import React from 'react'
import { withStyles } from 'material-ui/styles'

const Social = ({ classes }) => (
  <div className={classes.wrapper}>
    <i
      className="fa fa-facebook-official fa-2x"
    />
    <i
      className="fa fa-github fa-2x"
    />
    <i
      className="fa fa-instagram fa-2x"
    />
    <i
      className="fa fa-linkedin fa-2x"
    />
    <i
      className="fa fa-twitter fa-2x"
    />
  </div>
)

const styles = {
  wrapper: {
    color: '#003e61',
    display: 'flex',
    justifyContent: 'space-around',
    width: '65%',
  },
}

export default withStyles(styles)(Social)