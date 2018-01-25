import React, { Component } from 'react'
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper'
import { Button, withStyles, Paper } from 'material-ui'
import PropTypes from 'prop-types'
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
    const { classes } = this.props;
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


export default withStyles(styles)(Steps);