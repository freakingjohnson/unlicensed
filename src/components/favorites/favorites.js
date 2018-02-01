import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card, { CardContent } from 'material-ui/Card'
import { InfoOutline } from 'material-ui-icons'
import { Typography, Avatar, withStyles, IconButton, Button } from 'material-ui'
import FavoriteIcon from 'material-ui-icons/Favorite';
import axios from 'axios'

class Favorites extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    userData: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
    }
  }

  componentDidMount = () => {
    axios.get('/api/favorites', this.props.username)
      .then((res) => {
        this.setState({
          favorites: res.data,
        })
      })
  }

  deleteFromFavs = (username, userId) => {
    axios.delete(`http://localhost:4000/api/favorite/${username}/${userId}`).then((res) => {
      this.setState({
        favorites: res.data,
      })
    })
  }

  render() {
    const { classes, username, userData } = this.props,
      { favorites } = this.state

    let favoriteTile = userData.filter((user) => {
      let selectedUser;
      favorites.forEach((entry) => {
        if (entry.userid === user.id) {
          selectedUser = user
        }
      })
      return selectedUser
    })

    const size = window.innerWidth >= 769

    favoriteTile = favoriteTile.length > 0 ? (
      favoriteTile.map(selectedUser => (
        <Card key={selectedUser.id} className={classes.profileContainer}>
          <div className={classes.cardHeader}>
            <div className={classes.background}>
              <Avatar
                className={classes.avatar}
                src={(selectedUser.profile_photo ? selectedUser.profile_photo :
                'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg')}
              />
            </div>
            <div className={classes.userInfo}>
              <CardContent>
                <div className={classes.center}>
                  <Typography gutterBottom={size} type="title">{`${selectedUser.first_name} ${selectedUser.last_name}`}</Typography>
                  <Typography gutterBottom={size} type="subheading">{selectedUser.location}</Typography>
                  <Typography gutterBottom={size} type="caption" component="p">
                    <span style={{ color: 'black' }}> Services:</span> {selectedUser.worktype.split('_').join(' ')}
                  </Typography>
                </div>
                <div className={classes.show}>
                  <Typography>{selectedUser.bio_info}</Typography>
                  <IconButton onClick={() => this.deleteFromFavs(username, selectedUser.id)}>
                    <FavoriteIcon className={classes.heart} />
                  </IconButton>
                  <Button className={classes.button} component={Link} to={`/${selectedUser.id}/${selectedUser.first_name}-${selectedUser.last_name}`} raised color="primary">
              View Profile
                    <InfoOutline style={{ marginLeft: '5px' }} />
                  </Button>
                </div>
              </CardContent>
            </div>
            <IconButton component={Link} to={`/${selectedUser.id}/${selectedUser.first_name}-${selectedUser.last_name}`} className={classes.iconButton}>
              <InfoOutline className={classes.icon} />
            </IconButton>
          </div>
        </Card>

      ))
    )
      : <div> No Favorites </div>


    return (
      <div className={classes.wrapper}>
        {favoriteTile}
      </div>
    )
  }
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
  heart: {
    color: 'red',
  },
}

const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
  username: state.loginReducer.email,
})

export default connect(mapStateToProps)(withStyles(styles)(Favorites))

