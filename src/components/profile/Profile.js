import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles, Button, Typography, Avatar } from 'material-ui';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { getUserData } from './../../ducks/reducers/resultsReducer'


function Profile(props) {
  const { classes, userData } = props;
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

  return (

    <div>
      {
        userData.length > 0 ?
          <div>
            {/* put padding around card and shadding behind a little. make padding on sides of photos as well */}
            <div className={classes.row}>
              <Avatar alt="profile pic" src={userData[3].profile_photo} className={classes.avatar} />
            </div>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>{userData[3].first_name} {userData[3].last_name}</Typography>
                {console.log(userData.length)}
                {
                  // userData.length will should equal service reducer results for the displayed user
                  userData.length > 3 ?
                    <CardActions style={style} >
                      {/* write logic that will display button if more than 3 services provided material ui cards has a good icon button */}
                      <Button style={style} dense>All Services</Button>
                    </CardActions>
                :
                    <Typography>Work Type</Typography>
                }
                {/* will have to know which profile is going to be displayed and the reducers will update the past work reducer, pull from past work reducer */}
                <Typography>Work Desc</Typography>
                <Typography className={classes.title}>{userData[3].bio_info}</Typography>
                {/* make phone, email, Prefered way of contact less dense than the user input */}
                <Typography >Contact Info</Typography>
                <Typography className={classes.title}>Phone : {userData[3].phone.split('').splice(1, 12).join('')}</Typography>
                <Typography className={classes.title}>Email : {userData[3].email}</Typography>
                <Typography className={classes.title}>Prefered contact method: {contactMethod(userData)}</Typography>
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
  userData: state.resultsReducer.userData,
})

export default connect(mapStateToProps, { getUserData })(withStyles(styles)(Profile));

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.array.isRequired,
};

const contactMethod = (userData) => {
  let preferedMethod = ''
  if (userData[3].phone.replace(/[{}]/g, '').split(',')[1] === 'c') {
    preferedMethod = 'Call only'
  } else if (userData[3].phone.replace(/[{}]/g, '').split(',')[1] === 't') {
    preferedMethod = 'text only'
  } else {
    preferedMethod = 'call or text'
  }
  return preferedMethod
}
