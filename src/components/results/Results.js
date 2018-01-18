import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography/Typography';
import GridList from 'material-ui/GridList';
import { getUserData, searchData } from '../../ducks/reducers/resultsReducer'

const Results = ({ searchData, getUserData }) => {
  const userTile = searchData && searchData.map(user => (
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
      {searchData.length > 0 ?
        <div>
          <div />
          <GridList>
            {userTile}
          </GridList>
        </div> :
        <div>loading</div>
      }
    </div>
  )
}

// Results.propTypes = {
//   userData: PropTypes.array.isRequired,
// }

const mapStateToProps = state => ({
  searchData: state.resultsReducer.searchData,
})

export default connect(mapStateToProps, { getUserData })(Results)