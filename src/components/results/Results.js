import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card, { CardContent } from 'material-ui/Card';
import { InfoOutline } from 'material-ui-icons'
import { Typography, Avatar, withStyles, IconButton } from 'material-ui';

const Results = ({ searchData, classes }) => {
  const userTile = searchData && searchData.map((user, index) => (
    <Card className={classes.profileContainer} key={index}>
      <div className={classes.cardHeader}>
        <Avatar className={classes.avatar} src={(user.profile_photo ? user.profile_photo : 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg')} />
        <div className={classes.userInfo}>
          <CardContent>
            <h2 style={{ fontSize: '18px' }}>{`${user.first_name} ${user.last_name}`}</h2>
            <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>{user.location}</h3>
            <Typography type="caption" component="p">
              <b style={{ color: 'black' }}>Services:</b> {user.worktype.split('_').join(' ')}
            </Typography>
          </CardContent>
        </div>
        <IconButton component={Link} to={`/${user.id}/${user.first_name}-${user.last_name}`} className={classes.iconButton}>
          <InfoOutline className={classes.icon} />
        </IconButton>
      </div>
    </Card>
  ))

  return (
    <div>
      {searchData && searchData.length > 0 ?
        <div>
          <div />
          <div>({searchData.length}) Results Found <Link to="/" >Search Again</Link></div>
          {userTile}
        </div> :
        <div>({searchData.length}) Results Found <Link to="/" >Search Again</Link></div>
     }
    </div>
  )
}

const styles = {
  profileContainer: {
    display: 'flex',
    color: 'black',
    padding: '15px',
    height: '12vh',
  },
  avatar: {
    height: 80,
    width: 80,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 25px 0 10px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconButton: {
    position: 'absolute',
    right: '10px',
  },
  icon: {
    fontSize: '45px',
    color: '#003e61',
    marginLeft: '10px',
  },
}

const mapStateToProps = state => ({
  searchData: state.resultsReducer.searchData,
})

export default connect(mapStateToProps)(withStyles(styles)(Results))

Results.propTypes = {
  searchData: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}