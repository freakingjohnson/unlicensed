import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography/Typography';
import GridList from 'material-ui/GridList';

const Results = ({ searchData }) => {
  const userTile = searchData && searchData.map((user, index) => (
    <Link
      to={`/${user.id}/${user.first_name}-${user.last_name}`}
      key={index}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar src={user.profile_photo} />
       }
          title={`${user.first_name} ${user.last_name}`}
          subheader={user.worktype.split(', ').length > 2 ? `${user.worktype.split(', ')[0]}, ${user.worktype.split(', ')[1]}... (click to see more)` : user.worktype}
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
      {searchData && searchData.length > 0 ?
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

const mapStateToProps = state => ({
  searchData: state.resultsReducer.searchData,
})

export default connect(mapStateToProps)(Results)

Results.propTypes = {
  searchData: PropTypes.array.isRequired,
}