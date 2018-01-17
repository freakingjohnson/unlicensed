import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar'

const style = {
  padding: 0,
  margin: 0,
}
const styles = theme => ({
  card: {
    minWidth: 275,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  pic: {
    maxWidth: 345,
  },
  media: {
    height: 'auto',
    width: '100vw',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: 0,
    padding: 0,
  },
});

const jobs = [{ photo: 'http://res.cloudinary.com/dhowdfbmx/image/upload/v1513637011/kebbooilkiteq7npuojp.jpg', desc: 'photo1' },
  { photo: 'http://res.cloudinary.com/dhowdfbmx/image/upload/v1514429192/s5vy99sbubitho5hdppe.jpg', desc: 'photo2' },
]


function Profile(props) {
  const { classes } = props;

  const WorkPhotoCard = jobs.map(jobDesc => (
    <div key={jobs.photo}>
      <Card >
        <CardMedia>
          <img className={classes.media} src={jobDesc.photo} alt="job pic" />
        </CardMedia>
        <CardContent>
          <Typography component="p">
            {jobDesc.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  ))

  return (

    <div>
      <div className={classes.row}>
        <Avatar alt="profile pic" src="https://cdn.shopify.com/s/files/1/1325/1409/products/157-Mexico-Flag-Solo_Single_Front_grande_33205e4d-5e4f-4df4-919b-74f1d7de4f14_1024x1024.png?v=1476740848" className={classes.avatar} />
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>Name</Typography>
          <Typography className={classes.title}>Services Provided</Typography>
          <CardActions style={style} >
            {/* write logic that will display button if more than 3 services provided */}
            <Button style={style} dense>More Services</Button>
          </CardActions>
          <Typography className={classes.title}>Desc</Typography>
          <Typography className={classes.title}>Contact Info</Typography>

        </CardContent>
      </Card>
      <div >
        { WorkPhotoCard }
      </div>
    </div>


  )
}


Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);