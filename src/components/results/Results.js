import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography/Typography';
import GridList from 'material-ui/GridList';
import { getUserData, getUser } from '../../ducks/reducers/resultsReducer'

const Results = ({ searchData, getUser }) => {
  const userTile = searchData && searchData.map((user, index) => (
    <Link
      to={`/profile/${user.id}`}
      onClick={() => { getUser(user.id, searchData) }}
      key={index}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar src={user.profile_photo} />
       }
          title={`${user.first_name} ${user.last_name}`}
          subheader={user.worktype}
        />
        <CardContent>
          <Typography component="p">
            {user.bio_info}
          </Typography>
        </CardContent>
      </Card>
    </Link>
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
        <div>loading</div>
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

export default connect(mapStateToProps, { getUser })(Results)