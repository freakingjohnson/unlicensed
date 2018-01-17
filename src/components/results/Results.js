import React, { Component } from 'react'
import axios from 'axios'
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography/Typography';

// import PropTypes from 'prop-types'
// let result = {}
class Results extends Component {
  constructor() {
    super()
    this.state = {
      userData: [],
    }
  }

    getUsers = (event) => {
      axios.get('/api/users').then((res) => {
        this.setState({
          userData: res.data,
        })
      })
    }

    render() {
      const data = this.state.userData
      console.log(data)
      const userTile = data && data.map(group => (
        <Card key={group.id}>
          <CardHeader
            avatar={
              <Avatar src={group.profile_photo} />
                        }
            title={`${group.first_name} ${group.last_name}`}
          />
          <CardContent>
            <Typography component="p">
              {group.bio_info}
            </Typography>
          </CardContent>
        </Card>
      ))
      return (
        <div>
          <div>
            <Button
              raised
              onClick={this.getUsers}
            >
                        get users
            </Button>
          </div>
          {userTile}

        </div>
      )
    }
}

// Results.propTypes = {

// }

export default Results