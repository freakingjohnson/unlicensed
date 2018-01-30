import React, { PureComponent } from 'react'
import { TextField, Input, withStyles, Dialog, DialogTitle } from 'material-ui'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import NumberFormatCustom from './NumberFormatCustom'
import Checkout from './../stripe/StripeCheckout'
import { getPaid } from './../../ducks/reducers/proLoginReducer'

class PayMe extends PureComponent {
    static propTypes ={
      stripeId: PropTypes.string.isRequired,
      getPaid: PropTypes.func.isRequired,
      open: PropTypes.bool.isRequired,
      classes: PropTypes.object.isRequired,
    }

    state = {
      name: '',
      description: '',
      amount: '',
    }

    handleInput = name => (event) => {
      this.setState({
        [name]: event.target.value,
      })
    }

    render() {
      const { name, description, amount } = this.state
      const {
        stripeId, getPaid, open, classes,
      } = this.props
      const cost = amount.replace(/[$,.]+/g, '')

      return (
        <Dialog onClose={() => getPaid(false)} open={open} className={classes.dialog}>
          <DialogTitle className={classes.title}>Accept Payment</DialogTitle>
          <div className={classes.content} >
            <TextField value={name} label="Job Name" onChange={this.handleInput('name')} />
            <TextField multiline value={description} label="Job Description" onChange={this.handleInput('description')} />
            <Input style={{ margin: '20px 0' }} inputComponent={NumberFormatCustom} placeholder="Charge Amount" value={amount} onChange={this.handleInput('amount')} />
            <Checkout name={name} description={description} amount={cost * 1} accountId={stripeId} />
          </div>
        </Dialog>
      )
    }
}

const styles = {
  dialog: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#706b66',
  },
  payment: {
    color: '#003E61',
    marginLeft: '100px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '35vh',
    width: '80vw',
  },
}

const mapStateToProps = state => ({
  stripeId: state.proLoginReducer.stripeId,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPaid,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PayMe))