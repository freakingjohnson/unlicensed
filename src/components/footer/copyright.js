import React from 'react'
import { withStyles } from 'material-ui'

let currentYear = new Date().getFullYear()

const Copyright = ({ classes }) => (
  <p className={classes.copyrigt}> © {currentYear}, Builders Independent, All Rights Reserved. </p>
)

const styles = {
  copyrigt: {
    color: '#003e61',
  },
}

export default withStyles(styles)(Copyright)