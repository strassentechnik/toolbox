import React from 'react'
import { Field } from 'react-final-form'
import RadioField from './RadioField'
import vehicleTypes from '../vehicleTypes'

const VehicleTypeField = ({ meta }) => (
  <div className="o-grid o-grid--huge o-grid--autol o-grid--center o-grid--bottom">
    {Object.keys(vehicleTypes).map(type => (
      <div
        className="o-grid__cell u-4/12@tablet u-1/5@desktop u-margin-bottom-large"
        key={type}
      >
        <Field
          name="data[type]"
          type="radio"
          component={RadioField}
          {...vehicleTypes[type]}
        />
      </div>
    ))}
  </div>
)

export default VehicleTypeField
