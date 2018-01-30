import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card, { CardContent } from 'material-ui/Card'
import { InfoOutline } from 'material-ui-icons'
import { Typography, Avatar, withStyles, IconButton } from 'material-ui'
import axios from 'axios'

class Favorites extends Component {
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


  render() {
    let favoriteTile = this.props.userData.filter((user) => {
      let selectedUser;
      this.state.favorites.forEach((entry) => {
        if (entry.userid === user.id) {
          selectedUser = user
        }
      })
      return selectedUser
    })

    favoriteTile = favoriteTile.length > 0 ? (
      favoriteTile.map((selectedUser, i) => (
        <Card key={selectedUser.id}>
          <div>
            <Avatar src={(selectedUser.profile_photo ? selectedUser.profile_photo :
                          'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg')}
            />
            <div>
              <CardContent>
                <h2 style={{ fontSize: '18px' }}>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h2>
                <h3 style={{ fontSize: '14px', maginBottom: '5px' }}>{selectedUser.location}</h3>
                <Typography type="caption" component="p">
                  <b style={{ color: 'black' }}> Services:</b> {selectedUser.worktype.split('_').join(' ')}
                </Typography>
              </CardContent>
            </div>
            <IconButton component={Link} to={`/${selectedUser.id}/${selectedUser.first_name}-${selectedUser.last_name}`}>
              <InfoOutline />
            </IconButton>
          </div>
        </Card>

      ))
    )
      : <div> No Favorites </div>


    return (
      <div>
        {favoriteTile}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
  username: state.loginReducer.username,
})

export default connect(mapStateToProps)(Favorites)

