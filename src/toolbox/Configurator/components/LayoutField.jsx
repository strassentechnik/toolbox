import React from 'react'
import { Field } from 'react-final-form'
import RadioField from './RadioField'
import layoutTypes from '../layoutTypes'

const LayoutField = ({ input, meta }) => (
  <div className="o-grid o-grid--huge o-grid--autol o-grid--center o-grid--bottom">
    {Object.keys(layoutTypes).map(type => (
      <div
        className="o-grid__cell u-4/12@tablet u-1/5@desktop u-margin-bottom-large"
        key={type}
      >
        <Field
          name={input.name}
          type="radio"
          component={RadioField}
          {...layoutTypes[type]}
        />
      </div>
    ))}
  </div>
)

export default LayoutField
