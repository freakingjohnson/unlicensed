import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography/Typography';
import GridList from 'material-ui/GridList';
import { getUserData } from '../../ducks/reducers/resultsReducer'

const Results = ({ searchData }) => {
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
      {searchData ?
        <div>
          <div />
          <GridList cols={1}>
            {userTile}
          </GridList>
        </div> :
        <div />
     }
    </div>
  )
}

Results.propTypes = {
  searchData: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  searchData: state.resultsReducer.searchData,
})

export default connect(mapStateToProps, { getUserData })(Results)