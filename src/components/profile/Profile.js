import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar'


const styles = theme => ({
  card: {
    minWidth: 275,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  pic: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.row}>
        <Avatar alt="profile pic" src="profile.jpg" className={classes.avatar} />
      </div>

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>Name</Typography>
          <Typography className={classes.title}>Services Provided</Typography>
          <Typography className={classes.title}>desc</Typography>
          <Typography className={classes.title}>contact info</Typography>
          <CardActions>
            <Button dense>Learn More</Button>
          </CardActions>
        </CardContent>
      </Card>
      <Card className={classes.pic}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Work Type
          </Typography>
          <Typography component="p">
            Short Desc of work
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}


SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);