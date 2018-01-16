import React from 'react'
import { Checkbox } from 'material-ui'
import { connect } from 'react-redux'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import PropTypes from 'prop-types'
import { setServices, services } from './../../ducks/reducers/serviceReducer'

const ServicesProvided = ({ serviceReducer, setServices }) => {
  const form = services.map((service) => {
    const string = service.replace(/\s/g, '')
    return (
      <FormControlLabel
        key={string}
        control={
          <Checkbox
            name={string}
            value={string}
            checked={serviceReducer[string]}
            onChange={(e) => {
                console.log(string, serviceReducer, serviceReducer[string])
              setServices(e, serviceReducer[string])
            }}
          />
            }
        label={service}
      />
    )
  })

  return (
    <div>
      <h3>Step 2: What type of services do you provide?</h3>
      <FormGroup>
        {form}
      </FormGroup>
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setServices })(ServicesProvided)

ServicesProvided.propTypes = {
  serviceReducer: PropTypes.object.isRequired,
  setServices: PropTypes.func.isRequired,
}