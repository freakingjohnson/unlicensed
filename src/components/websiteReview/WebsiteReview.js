import React from 'react'
import { Typography, withStyles } from 'material-ui'

const WebsiteReview = ({ classes }) => (
  <div className={classes.container}>
    <Typography className={classes.headline} gutterBottom align="center" type="headline" color="primary">"Best Website out there!"</Typography>
    <Typography gutterBottom align="center" type="body1" color="secondary">Best website I have ever used for hiring day labor. Every Pro I have worked with was hard working, respectable, and trustworthy. This is by far the best way to spend your money in terms of hiring labor. Maybe deportation isn't the best solution? I might have to reconsider building my wall after all...</Typography>
    <Typography style={{ marginLeft: '225px' }} className={classes.headline} align="right" type="subheading" color="primary">-Donald Trump</Typography>
  </div>
)

const styles = {
  container: {
    margin: '15px',
    height: '35vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-width: 769px)': {
      width: '60%',
      marginLeft: '20%',
    },
  },
  headline: {
    fontStyle: 'italic',
  },
}

export default withStyles(styles)(WebsiteReview)