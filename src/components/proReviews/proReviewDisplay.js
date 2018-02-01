import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles, Typography, Paper } from 'material-ui';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import StarBorder from 'material-ui-icons/StarBorder';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ReactStars from 'react-stars';


class ReviewList extends React.Component {
    state = {
      open: false,
    };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, reviews, selectedUser } = this.props;
    const selectedPro = reviews && reviews.filter((pro) => {
      if (pro.pro_getting_reviewed === (selectedUser.id)) {
        return pro
      }
    })

    let average = 0;

    const reviewList = selectedPro && selectedPro.map((review, index) => {
      average += (review.rating * 1)
      return (
        <List key={index} component="div" disablePadding>
          <ListItem className={classes.listItem}>
            <ReactStars edit={false} count={5} value={review.rating * 1} size={24} color="#ffd700" />
            <div className={classes.indent}>
              <Typography type="body1">{review.comment}</Typography>
              <Typography type="caption">-{review.user_posting_review.replace(/[-]/, ' ')}</Typography>
            </div>
          </ListItem>
        </List>
      )
    })

    const size = window.innerWidth >= 769

    return (
      <div>
        {
        selectedPro.length > 0 &&
          <Paper elevation={5} className={classes.root}>
            <List
              component="nav"
              subheader={<ListSubheader component="div" />}
            >
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Reviews" />
                <ReactStars edit={false} count={5} value={Math.round((average / selectedPro.length) * 2) / 2} size={18} color="#ffd700" />
                <div className={classes.none}>
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItem>
              <Collapse in={size ? true : this.state.open} timeout="auto" unmountOnExit>
                {reviewList}
              </Collapse>
            </List>
          </Paper>
    }
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '@media (min-width: 769px)': {
      height: '45vh',
      overflow: 'scroll',
    },
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  indent: {
    marginLeft: '10px',
  },
  none: {
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
});


const mapStateToProps = state => ({
  proUserData: state.resultsReducer.userData,
  loginReducer: state.loginReducer,
  reviews: state.resultsReducer.reviews,
})

ReviewList.propTypes = {
  classes: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  selectedUser: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(ReviewList));