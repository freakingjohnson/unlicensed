import React from 'react'
import { Typography, withStyles, Paper, Card, CardContent, CardMedia } from 'material-ui'
import PropTypes from 'prop-types'

const WorkPhotoCard = ({ workPhotos, photoDesc, classes }) => {
  const description = photoDesc.split(',').map((desc, index) => (
    <Typography className={classes.desc} type="subheading" color="accent" key={index}>{desc}</Typography>
  ))
  const photo = workPhotos.split(',').map((image, index) => (
    <div key={index}>
      <Card className={classes.card} >
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title} type="headline" color="primary">Past projects I have worked on</Typography>
          <CardMedia className={classes.image} image={image} />
          <CardContent>
            {description}
          </CardContent>
        </Paper>
      </Card>
    </div>
  ))

  return (
    <div>
      { photo }
    </div>
  )
}

const styles = {
  card: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: '95%',
    right: '2.5%',
  },
  title: {
    textAlign: 'center',
    margin: '10px 0',
  },
  desc: {
    textAlign: 'center',
  },
  image: {
    height: '250px',
  },
}

export default withStyles(styles)(WorkPhotoCard)

WorkPhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  workPhotos: PropTypes.string.isRequired,
  photoDesc: PropTypes.string.isRequired,
}