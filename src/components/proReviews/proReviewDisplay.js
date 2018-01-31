import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import StarBorder from 'material-ui-icons/StarBorder';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import { Typography } from 'material-ui'
import ReactStars from 'react-stars';


class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false };
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    const selectedPro = this.props.reviews.filter((pro) => {
      if (pro.pro_getting_reviewed === (this.props.selectedUser.id)) {
        return pro
      }
    })

    const reviewList = selectedPro.map((review, index) => (
      <List key={index} component="div" disablePadding>
        <ListItem>
          <ReactStars count={5} value={review.rating * 1} size={15} color="#ffd700" />
          <ListItemText primary={review.comment} />
          <Typography type="title">{review.user_posting_review}</Typography>
        </ListItem>
      </List>
    ))

    return (
      <div>
        {
        selectedPro.length > 0 &&
          <div className={classes.root}>
            <List
              component="nav"
              subheader={<ListSubheader component="div" />}
            >
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Reviews" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                {reviewList}
              </Collapse>
            </List>
          </div>
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
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});


const mapStateToProps = state => ({
  proUserData: state.resultsReducer.userData,
  loginReducer: state.loginReducer,
  reviews: state.resultsReducer.reviews[0],
})

ReviewList.propTypes = {
  classes: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  selectedUser: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(ReviewList));