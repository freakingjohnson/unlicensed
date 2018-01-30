import React from 'react'
import { Checkbox, FormGroup, FormControlLabel } from 'material-ui'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setServices, services } from './../../ducks/reducers/serviceReducer'

const ServicesProvided = ({ serviceReducer, setServices }) => {
  const form = services.map((service) => {
    const string = service.replace(/\s/g, '_')
    return (
      <FormControlLabel
        key={string}
        control={
          <Checkbox
            name={string}
            value={string}
            checked={serviceReducer[string]}
            onChange={(e) => {
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