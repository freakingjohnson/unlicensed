import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { InfoOutline } from 'material-ui-icons'
import { Typography, Avatar, withStyles, IconButton, Card, CardContent, Button } from 'material-ui';

const Results = ({ userData, classes, match }) => {
  const searchData = userData && userData.filter((el) => {
    if (match.params.searchby === 'worktype' && el.worktype) {
      return el.worktype.toLowerCase().indexOf(match.params.query.toLowerCase()) > -1
    } else if (match.params.searchby === 'name' && el.first_name && el.last_name) {
      return (`${el.first_name} ${el.last_name}`).toLowerCase().indexOf(match.params.query.toLowerCase()) > -1
    } else if ((match.params.searchby === 'city' && el.location) || (match.params.searchby === 'zip' && el.location)) {
      return el.location.toLowerCase().indexOf(match.params.query.toLowerCase()) > -1
    }
  })

  const size = window.innerWidth >= 769

  const userTile = searchData.map(user => (
    <Card raised={size} className={classes.profileContainer} key={user.id}>
      <div className={classes.cardHeader}>
        <div className={classes.background}>
          <Avatar className={classes.avatar} src={(user.profile_photo ? user.profile_photo : 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg')} />
        </div>
        <div className={classes.userInfo}>
          <CardContent>
            <div className={classes.center}>
              <Typography gutterBottom={size} type="title">{`${user.first_name} ${user.last_name}`}</Typography>
              <Typography gutterBottom={size} type="subheading">{user.location}</Typography>
              <Typography gutterBottom={size} type="caption" component="p">
                <span style={{ color: 'black' }}>Services:</span> {user.worktype.split('_').join(' ')}
              </Typography>
            </div>
            <div className={classes.show}>
              <Typography>{user.bio_info}</Typography>
              <Button className={classes.button} component={Link} to={`/${user.id}/${user.first_name}-${user.last_name}`} raised color="primary">
              View Profile
                <InfoOutline style={{ marginLeft: '5px' }} />
              </Button>
            </div>
          </CardContent>
        </div>
        <IconButton component={Link} to={`/${user.id}/${user.first_name}-${user.last_name}`} className={classes.iconButton}>
          <InfoOutline className={classes.icon} />
        </IconButton>
      </div>
    </Card>
  ))

  return (
    <div>
      {searchData &&
        <div className={classes.wrapper}>
          {userTile}
        </div>
     }
    </div>
  )
}

const styles = {
  wrapper: {
    '@media (min-width: 769px)': {
      display: 'grid',
      gridTemplateColumns: '33% 33% 33%',
      gridColumnGap: '20px',
      gridRowGap: '40px',
      margin: '40px 50px',
    },
  },
  profileContainer: {
    display: 'flex',
    color: 'black',
    padding: '15px',
    height: '20vh',
    '@media (min-width: 769px)': {
      width: '25vw',
      height: '60vh',
      position: 'relative',
    },
  },
  background: {
    '@media (min-width: 769px)': {
      background: 'radial-gradient(#ffffff, #9e9994, #45403c)',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  avatar: {
    height: 80,
    width: 80,
    '@media (min-width: 769px)': {
      height: 130,
      width: 130,
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 769px)': {
      flexDirection: 'column',
      width: '100%',
    },
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 25px 0 10px',
    '@media (min-width: 769px)': {
      textAlign: 'center',
    },
  },
  center: {
    '@media (min-width: 769px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
  iconButton: {
    position: 'absolute',
    right: '10px',
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
  icon: {
    fontSize: '45px',
    color: '#003e61',
    marginLeft: '10px',
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
  show: {
    display: 'none',
    '@media (min-width: 769px)': {
      display: 'inline',
    },
  },
  button: {
    '@media (min-width: 769px)': {
      position: 'absolute',
      bottom: '12px',
      left: '27.5%',
      width: '45%',
    },
  },
}

const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
})

export default connect(mapStateToProps)(withStyles(styles)(Results))

Results.propTypes = {
  userData: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}