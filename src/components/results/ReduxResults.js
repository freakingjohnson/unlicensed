import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography/Typography';
import { getUserData } from '../../ducks/reducers/resultsReducer'


const Results = ({ userData }) => {
  console.log(userData)
  const userTile = userData && userData.map(user => (
    <Card key={user.id}>
      <CardHeader
        avatar={
          <Avatar src={user.profile_photo} />
                }
        title={`${user.first_name} ${user.last_name}`}
      />
      <CardContent>
        <Typography component="p">
          {user.bio_info}
        </Typography>
      </CardContent>
    </Card>
  ))

  return (
    <div>
      <div>
        <Button
          raised
          onClick={getUserData}
        >
                    get users
        </Button>
      </div>
      {userTile}

    </div>
  )
}

// Results.propTypes = {
//     userData: array,

// }
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getUserData })(Results)