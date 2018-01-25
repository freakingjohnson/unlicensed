import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom'
import { withStyles, Button, Typography, Avatar, Paper } from 'material-ui';
import Card, { CardContent } from 'material-ui/Card';
import EmailMe from './EmailMe'
import WorkPhotoCard from './WorkPhotoCard'

const Profile = ({
  classes, userData, match,
}) => {
  const selectedUser = userData.filter((user) => {
    if (user.id === (match.params.id * 1)) {
      return user
    }
  })

  return (
    <div>
      {
        selectedUser.length > 0 ?
          <div>
            <div>
              <div className={classes.row}>
                <Avatar alt="profile pic" src={selectedUser[0].profile_photo} className={classes.avatar} />
              </div>
              <Card className={classes.card}>
                <Paper elevation={3} className={classes.paper}>
                  <CardContent className={classes.cardContent}>
                    <Typography type="display1" color="primary">{selectedUser[0].first_name} {selectedUser[0].last_name}</Typography>
                    <Typography type="subheading">Services Offered</Typography>
                    <Typography type="body1" color="secondary">{selectedUser[0].worktype.replace(/[_]+/g, ' ')}</Typography>
                    <Typography type="subheading">About Me</Typography>
                    <Typography type="body1" color="secondary">{selectedUser[0].bio_info}</Typography>
                    <Typography type="subheading" >Contact Info</Typography>
                    <Typography type="body1" color="secondary"><span style={{ color: '#003e61' }}>Location:</span> {selectedUser[0].location}</Typography>
                    <Typography type="body1" color="secondary"><span style={{ color: '#003e61' }}>Phone:</span> {selectedUser[0].phone.replace(/[{}"]+/g, '').split(',')}</Typography>
                    <Typography type="body1" color="secondary"><span style={{ color: '#003e61' }}>Email:</span> {selectedUser[0].email}</Typography>
                    <Typography type="body1" color="secondary"><span style={{ color: '#003e61' }}>Prefered contact method:</span> {contactMethod(selectedUser[0])}</Typography>
                    {/* {loggedIn && */}
                    <Button raised color="accent" component={Link} to={`/${selectedUser[0].id}/${selectedUser[0].first_name}-${selectedUser[0].last_name}/edit`} >Edit Profile</Button>
                  </CardContent>
                </Paper>
              </Card>
            </div>
            <WorkPhotoCard workPhotos={selectedUser[0].workphotos} photoDesc={selectedUser[0].photo_info} />
            <EmailMe proName={`${selectedUser[0].first_name}`} proEmail={`${selectedUser[0].email}`} />
          </div> :
          <h3>loading</h3>
        }
    </div>
  )
}

const styles = {
  // make it so profile pic and contact info are aligned
  card: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-80px',

  },
  cardContent: {
    marginTop: '80px',
    textAlign: 'center',
  },
  paper: {
    width: '95%',
    left: '2.5%',
  },
  title: {
    marginBottom: '5px',
    fontSize: '30px',
    color: '#000',
  },
  subtitle: {
    fontSize: '18px',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: "url('https://images.unsplash.com/photo-1469389335181-2198b4caa734?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b0e608846974f4f334f4d8b29edfc4e&auto=format&fit=crop&w=1566&q=80')",
    backgroundSize: 'cover',

  },
  avatar: {
    marginTop: '40px',
    width: 170,
    height: 170,
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
};

const mapStateToProps = state => ({
  user: state.resultsReducer.user,
  userData: state.resultsReducer.userData,
})

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Profile)));

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Profile.defaultProps = {
  userData: ['name', 'email', 'location'],
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
