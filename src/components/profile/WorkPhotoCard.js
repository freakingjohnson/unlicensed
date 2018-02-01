import React from 'react'
import { Typography, withStyles, Paper, Card, CardContent, CardMedia } from 'material-ui'
import PropTypes from 'prop-types'
import _ from 'underscore'

const WorkPhotoCard = ({
  selectedUser, classes,
}) => {
  const user = selectedUser.workphotos.split('¶')
  const userImages = user.map(image => image.split('§'))

  const photo = userImages.map((image, index) => (
    <div key={index}>
      <Card className={classes.card} >
        <Paper elevation={3} className={classes.paper}>
          <CardMedia className={classes.image} image={image[0]} />
          <CardContent>
            <Typography className={classes.desc} type="subheading" color="accent" key={index}>{image[1]}</Typography>
          </CardContent>
        </Paper>
      </Card>
    </div>
  ))

  return (
    <Paper elevation={5} className={classes.container}>
      <div className={classes.title}>
        <Typography className={classes.work} type="title" color="primary">My Past Work</Typography>
      </div>
      { photo }
    </Paper>
  )
}

const styles = {
  container: {
    '@media (min-width: 769px)': {
      overflow: 'scroll',
      height: '77vh',
    },
  },
  card: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'center',
    '@media (min-width: 769px)': {
      margin: '0',
    },
  },
  paper: {
    width: '95%',
    right: '2.5%',
    '@media (min-width: 769px)': {
      width: '100%',
      right: '0%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(#9e9994, #706b66, #45403c)',
    height: '8vh',
  },
  work: {
    // textShadow: '3px 2px 3px black',
    textDecoration: 'underline',
  },
  desc: {
    textAlign: 'center',
  },
  image: {
    height: '250px',
    '@media (min-width: 769px)': {
      width: '30vw',
      margin: '20px 0',
    },
  },
}

export default withStyles(styles)(WorkPhotoCard)

WorkPhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
}