import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles, Button, Typography, Avatar } from 'material-ui';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

function Profile(props) {
  const { classes, user } = props;
  console.log(user[0])
  const selectedUser = user[0]
  const bull = <span className={classes.bullet}>•</span>
  const WorkPhotoCard = jobs.map((jobDesc, index) => (
    <div key={index}>
      <Card >
        {/* image tag will be equal to projectPicName */}
        <CardMedia className={classes.media} image={jobDesc.photo} />
        <CardContent>
          <Typography component="p">
            {/* jobDesc.desc will be equal to projectDesc */}
            {jobDesc.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  ))
  const servicesOffered = (selectedUser) => {
    const allServices = selectedUser.worktype.split('')
    allServices.map((service, index) => (
      <div key={index}>
        {bull}{service}
      </div>
    ))
  }

  return (
    <div>
      {
        selectedUser ?
          <div>
            {/* put padding around card and shadding behind a little. make padding on sides of photos as well */}
            <div className={classes.row}>
              <Avatar alt="profile pic" src={selectedUser.profile_photo} className={classes.avatar} />
            </div>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>{selectedUser.first_name} {selectedUser.last_name}</Typography>
                {/* if the services are more more than 3 then display button that will display three and then the rest */}
                {/* {
                  allServices.length > 3 ?
                    <CardActions style={style} >
                      write logic that will display button if more thanservices provided material ui cards has a good icon button
                      <Button style={style} dense>All Services</Button>
                    </CardActions>
                :
                    <Typography>Work Type</Typography>
                } */}
                <Typography>Work Desc</Typography>
                <Typography className={classes.title}>{selectedUser.bio_info}</Typography>
                {/* make phone, email, Prefered way of contact less dense than the selectedUser input */}
                {console.log(typeof selectedUser.worktype)}
                <Typography >Contact Info</Typography>
                <Typography className={classes.title}>Phone : {selectedUser.phone.split('').splice(1, 12).join('')}</Typography>
                <Typography className={classes.title}>Email : {selectedUser.email}</Typography>
                <Typography className={classes.title}>Prefered contact method: {contactMethod(selectedUser)}</Typography>
              </CardContent>
            </Card>
            <div >
              { WorkPhotoCard }
            </div>
          </div> :
          <h3>loading</h3>
        }
    </div>
  )
}

const style = {
  padding: 0,
  margin: 0,
}

const styles = theme => ({
  // make it so profile pic and contact info are aligned
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
    // make conatiner for pic so i can set the height to fill that div.
    height: '350px',
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

const mapStateToProps = state => ({
  user: state.resultsReducer.user,
})

export default connect(mapStateToProps)(withStyles(styles)(Profile));

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.array.isRequired,
};

const contactMethod = (selectedUser) => {
  let preferedMethod = ''
  if (selectedUser.phone.replace(/[{}]/g, '').split(',')[1] === 'c') {
    preferedMethod = 'Call only'
  } else if (selectedUser.phone.replace(/[{}]/g, '').split(',')[1] === 't') {
    preferedMethod = 'text only'
  } else {
    preferedMethod = 'call or text'
  }
  return preferedMethod
}
