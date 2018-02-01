import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui'
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';

class FavoritesIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  componentDidMount = () => {
    const { username, userId } = this.props
    axios.get('/api/favorites', username)
      .then((res) => {
        let checked = res.data.filter((fav) => {
          if (userId === fav.userid) {
            this.setState({
              checked: true,
            })
          }
        })
      })
  }

  handleCheck = (username, userId) => {
    if (this.state.checked === false) {
      axios.post('http://localhost:4000/api/favorite', { username, userId })
        .then(() => {
          this.setState({
            checked: !this.state.checked,
          })
        })
    } else {
      axios.delete(`http://localhost:4000/api/favorite/${username}/${userId}`)
        .then(() => {
          this.setState({
            checked: !this.state.checked,
          })
        })
    }
  }
  render() {
    const {
      loggedIn, username, userId, classes,
    } = this.props

    return (
      <div>
        {
          loggedIn &&
          <div>
            <IconButton onClick={() => this.handleCheck(username, userId)} aria-label="Add to favorites">
              <FavoriteIcon style={{ color: (this.state.checked ? 'red' : 'gray') }} />
            </IconButton>
          </div>
        }
      </div>
    )
  }
}

const styles = {

}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
  username: state.loginReducer.email,
})

export default (connect(mapStateToProps)(withStyles(styles)(FavoritesIcon)))
