import React, { Component } from 'react'
import Stepper, { Step, StepButton } from 'material-ui/Stepper'
import { Button, withStyles } from 'material-ui'
import PropTypes from 'prop-types'
import PersonalInfo from './PersonalInfo'
import ServicesProvided from './ServicesProvided'

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
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
      return 'Step 3: Let us know what work you want to show off!';
    case 3:
      return 'Step 4: Make sure we have the right info.'
    default:
      return 'Unknown step';
  }
}

class Steps extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    activeStep: 0,
    completed: {},
  };


  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  totalSteps = () => getSteps().length;

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                completed={this.state.completed[index]}
              >
                {label}
              </StepButton>
            </Step>
            ))}
        </Stepper>
        <div>
          {this.allStepsCompleted() ? (
            <div>
              <div className={classes.instructions}>
                All steps completed - you&quot;re finished
              </div>
            </div>
          ) : (
            <div>
              <div className={classes.instructions}>{getStepContent(activeStep)}</div>
              <div>
                <Button raised color="primary" onClick={this.handleNext} className={classes.button}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (this.state.completed[this.state.activeStep] ? (
                    <div type="caption" className={classes.completed}>
                      Step {activeStep + 1} already completed
                    </div>
                  ) : (
                    <Button raised color="primary" onClick={this.handleComplete}>
                      {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                    </Button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Steps)