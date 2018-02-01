import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import withStyles from 'material-ui/styles/withStyles'
import ReactStars from 'react-stars'
import { setReviews } from './../../ducks/reducers/resultsReducer'

class ProReviews extends Component {
  static propTypes = {
    loginReducer: PropTypes.object.isRequired,
    selectedUser: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      loggedinUserName: this.props.loginReducer.userName,
      comment: '',
      proReceivingReviewId: this.props.selectedUser.id,
      rating: 0,
    }
    this.ratingHandler = this.ratingHandler.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {
      loggedinUserName,
      comment,
      proReceivingReviewId,
      rating,
    } = this.state
    axios.post('http://localhost:4000/api/proReview', {
      loggedinUserName, comment, proReceivingReviewId, rating,
    }).then((res) => {
      this.setState({
        open: false,
      })
      console.log(res.data)
      this.props.setReviews(res.data)
    })
  }

  commentHandler = (e) => {
    this.setState({ comment: e.target.value })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  ratingHandler = (e) => {
    this.setState({ rating: e })
    console.log(this.state.rating)
  }

  render() {
    return (
      <div>
        {

          <div>
            <Button raised color="accent" onClick={this.handleClickOpen}>Leave Review of Pro</Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Pro Review</DialogTitle>
              <DialogContent>
                <DialogContentText>
              Please leave your reviews of the pro here.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Pro review"
                  type="review"
                  onChange={e => this.commentHandler(e)}
                  value={this.state.comment}
                  fullWidth
                />
                <ReactStars count={5} value={this.state.rating} onChange={e => this.ratingHandler(e)} size={24} color="#ffd700" />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
              Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
              Submit Pro Review
                </Button>
              </DialogActions>
            </Dialog>
          </div>
  }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  proUserData: state.resultsReducer.userData,
  loginReducer: state.loginReducer,
})

const styles = {

}
export default connect(mapStateToProps, { setReviews })(withStyles(styles)(ProReviews))
