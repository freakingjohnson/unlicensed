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
    let favoriteDisplay = this.props.loggedIn === true ? (
      <div>
        <IconButton onClick={() => this.handleCheck(this.props.username, this.props.userId)} aria-label="Add to favorites" >
          <FavoriteIcon />
        </IconButton>
      </div>) :
      null;
    return (
      <div>
        {favoriteDisplay}
      </div>
    )
  }
}

const styles = {

}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
  username: state.loginReducer.username,
})

export default (connect(mapStateToProps)(withStyles(styles)(FavoritesIcon)))
