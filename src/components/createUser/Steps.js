import React, { Component } from 'react'
import { Button, withStyles, Stepper, Step, StepLabel, StepContent } from 'material-ui'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PersonalInfo from './PersonalInfo'
import ServicesProvided from './ServicesProvided'
import PastProjects from './PastProjects'
import ReviewInfo from './ReviewInfo'
import SubmitInfo from './SubmitInfo'

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  resetContainer: {
    marginTop: 0,
    padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
  },
});

function getSteps() {
  return ['Personal Info', 'What do you do?', 'Past Projects', 'Review Info'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <ServicesProvided />;
    case 2:
      return <PastProjects />;
    case 3:
      return <ReviewInfo />;
    default:
      return 'Unknown step';
  }
}

class Steps extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired,
  };

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const {
      classes,
      firstName,
      lastName,
      email,
      userPassword,
      location,
    } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <div>{getStepContent(index)}</div>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                      color="accent"
                    >
                        Back
                    </Button>
                    {
                    activeStep === steps.length - 1 ?
                      <SubmitInfo /> :
                      <Button
                        raised
                        disabled={firstName.length < 1 || lastName.length < 1 || location.length < 5 || email.length < 1 || userPassword.length < 1}
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                    Next
                      </Button>
                    }
                  </div>
                </div>
              </StepContent>
            </Step>
            ))}
        </Stepper>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  firstName: state.userReducer.firstName,
  lastName: state.userReducer.lastName,
  email: state.userReducer.email,
  userPassword: state.userReducer.userPassword,
  location: state.userReducer.location,
})

export default withStyles(styles)(connect(mapStateToProps)(Steps))