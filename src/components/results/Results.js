import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography/Typography';
import GridList from 'material-ui/GridList';
import { createStore } from 'redux'
import { getUserData } from '../../ducks/reducers/resultsReducer'
import reducer from '../../ducks/rootReducer'

const Results = ({ userData, getUserData }) => {
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
      {userData ?
        <div>
          <div />
          <GridList>
            {userTile}
          </GridList>
        </div> :
        <div>
          <Button
            raised
            onClick={() => getUserData()}
          >
            get users
          </Button>
        </div>
      }
    </div>
  )
}

// Results.propTypes = {
//   userData: PropTypes.array.isRequired,
// }

const mapStateToProps = state => ({
  userData: state.resultsReducer.userData,
})

export default connect(mapStateToProps, { getUserData })(Results)