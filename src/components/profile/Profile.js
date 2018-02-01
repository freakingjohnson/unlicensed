import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { withStyles, Button, Typography, Avatar, Paper, Card, CardContent } from 'material-ui'
import EmailMe from './EmailMe'
import WorkPhotoCard from './WorkPhotoCard'
import ProReview from '../proReviews/proReviewDialogBox'
import ProReviewDisplay from '../proReviews/proReviewDisplay'
import FavoritesIcon from '../favorites/favoriteIcon'
import Connect from './Connect'
import { getPaid } from './../../ducks/reducers/proLoginReducer'
import PayMe from './PayMe'

const Profile = ({
  classes, userData, match, proLoggedIn, stripeId, getPaid, payMe, userId, loggedIn,
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
          <div className={classes.wrapper}>
            <div>
              <div className={classes.row}>
                <Avatar alt="profile pic" src={selectedUser[0].profile_photo ? selectedUser[0].profile_photo : 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'} className={classes.avatar} />
              </div>

              <Card className={classes.card}>
                <Paper elevation={3} className={classes.paper}>
                  <CardContent className={classes.cardContent}>
                    <FavoritesIcon userId={selectedUser[0].id} />
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
                    { proLoggedIn && userId === selectedUser[0].id &&
                    <div>
                      <Button className={classes.buttons} raised color="accent" component={Link} to={`/${selectedUser[0].id}/${selectedUser[0].first_name}-${selectedUser[0].last_name}/edit`} >Edit Profile</Button>
                      { stripeId === null ? <Connect id={match.params.id} name={match.params.name} /> : <Button className={classes.buttons} raised color="primary" onClick={() => getPaid(true)}>Accept Payment</Button>}
                      <PayMe open={payMe} onClose={() => getPaid(false)} />
                    </div>
                    }
                  </CardContent>
                </Paper>
              </Card>
            </div>
            <div className={classes.item1}>
              <WorkPhotoCard selectedUser={selectedUser[0]} />
            </div>
            <div className={classes.item2}>
              <ProReviewDisplay selectedUser={selectedUser[0]} />
            </div>
            {
              loggedIn &&
              <div className={classes.item4}>
                <ProReview selectedUser={selectedUser[0]} />
              </div>
              }
            <div className={classes.item3}>
              <EmailMe proName={`${selectedUser[0].first_name}`} proEmail={`${selectedUser[0].email}`} />
            </div>
          </div> :
          <h3>loading</h3>
        }
    </div>
  )
}

const styles = {
  wrapper: {
    '@media (min-width: 769px)': {
      display: 'grid',
      gridTemplateColumns: '34% 33% 33%',
      gridTemplateRow: '60% 40%',
      gridColumnGap: '20px',
      gridRowGap: '40px',
      margin: '20px',
    },
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-80px',
    '@media (min-width: 769px)': {
      height: '60vh',
    },

  },
  cardContent: {
    marginTop: '80px',
    textAlign: 'center',
  },
  paper: {
    width: '95%',
    left: '2.5%',
    '@media (min-width: 769px)': {
      width: '100%',
      left: '0%',
    },
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
  item1: {
    '@media (min-width: 769px)': {
      gridColumn: '2 / 4',
      width: '96%',
    },
  },
  item2: {
    '@media (min-width: 769px)': {
      gridColumn: '3 / 4',
      gridRow: '2 /3',
      marginLeft: '25px',
    },
  },
  item3: {
    '@media (min-width: 769px)': {
      gridColumn: '1 / 3',
      gridRow: '2 /3',
    },
  },
  item4: {
    '@media (min-width: 769px)': {
      gridColumn: '3 / 4',
      gridRow: '2 /3',
      marginTop: '75%',
      marginLeft: '25px',
    },
  },
  buttons: {
    '@media (min-width: 769px)': {
      margin: '5px',
    },
  },
};

const mapStateToProps = state => ({
  user: state.resultsReducer.user,
  userData: state.resultsReducer.userData,
  loggedIn: state.loginReducer.loggedIn,
  reviews: state.resultsReducer.reviews[0],
  proLoggedIn: state.proLoginReducer.proLoggedIn,
  stripeId: state.proLoginReducer.stripeId,
  payMe: state.proLoginReducer.payMe,
  userId: state.proLoginReducer.userId,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPaid,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile)));

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  proLoggedIn: PropTypes.bool.isRequired,
  stripeId: PropTypes.string.isRequired,
  getPaid: PropTypes.func.isRequired,
  payMe: PropTypes.bool.isRequired,
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