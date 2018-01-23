import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom'
import { withStyles, Button, Typography, Avatar } from 'material-ui';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { revealServices } from './../../ducks/reducers/resultsReducer'

const Profile = ({
  classes, userData, match, reveal, revealServices,
}) => {
  const selectedUser = userData.filter((user) => {
    if (user.id === (match.params.id * 1)) {
      return user
    }
  })

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

  const allServices = selectedUser.length > 0 && selectedUser[0].worktype.split(',').map((service, index) => (
    <div key={index}>
      {service}
    </div>
  ))

  const firstServices = allServices.length > 3 && allServices.slice(0, 3)
  const restOfServices = allServices.length > 3 && allServices.slice(3)

  return (
    <div>
      {
        selectedUser.length > 0 ?
          <div>
            {/* put padding around card and shadding behind a little. make padding on sides of photos as well */}
            <div className={classes.row}>
              <Avatar alt="profile pic" src={selectedUser[0].profile_photo} className={classes.avatar} />
            </div>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>{selectedUser[0].first_name} {selectedUser[0].last_name}</Typography>
                {/* if the services are more more than 3 then display button that will display three and then the rest */}
                {
                  allServices.length > 3 ?
                    <div>
                      <h2>Services Offered</h2>
                      <div className={classes.title}>{firstServices}</div>
                      <div>{reveal && restOfServices}</div>
                      <CardActions>
                        <Button onClick={() => revealServices(reveal)} >{reveal ? 'Less Services' : 'More Services'}</Button>
                      </CardActions>
                    </div>
                :
                    <div>
                      <Typography>Services Offered</Typography>
                      <div className={classes.title}>{allServices}</div>
                    </div>
                }
                <Typography>Work Desc</Typography>
                <Typography className={classes.title}>{selectedUser[0].bio_info}</Typography>
                {/* make phone, email, Prefered way of contact less dense than the selectedUser input */}
                <Typography >Contact Info</Typography>
                <Typography className={classes.title}>Location: {selectedUser[0].location}</Typography>
                <Typography className={classes.title}>Phone: {selectedUser[0].phone.split('').splice(1, 12).join('')}</Typography>
                <Typography className={classes.title}>Email: {selectedUser[0].email}</Typography>
                <Typography className={classes.title}>Prefered contact method: {contactMethod(selectedUser[0])}</Typography>
                {/* {loggedIn && */}
                <Link to={`/${selectedUser[0].id}/${selectedUser[0].first_name}-${selectedUser[0].last_name}/edit`} >
                  <Button>Edit Profile</Button>
                </Link>
              </CardContent>
            </Card>
            <div>{ WorkPhotoCard }</div>
          </div> :
          <h3>loading</h3>
        }
    </div>
  )
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
  userData: state.resultsReducer.userData,
  reveal: state.resultsReducer.reveal,
})

export default withRouter(connect(mapStateToProps, { revealServices })(withStyles(styles)(Profile)));

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  reveal: PropTypes.bool,
  revealServices: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  userData: ['name', 'email', 'location'],
  reveal: false,
}

const contactMethod = (selectedUser) => {
  let preferedMethod = ''
  if (selectedUser.phone.replace(/[{}]/g, '').split(',')[1] === 'c') {
    preferedMethod = 'Call only'
  } else if (selectedUser.phone.replace(/[{}]/g, '').split(',')[1] === 't') {
    preferedMethod = 'Text only'
  } else {
    preferedMethod = 'Call or Text'
  }
  return preferedMethod
}
