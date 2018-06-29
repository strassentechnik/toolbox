import React from 'react'
import { Field } from 'react-final-form'
import RadioField from './RadioField'
import settingTypes from '../settingTypes'

const SettingField = ({ input, meta }) => (
  <div className="o-grid o-grid--huge o-grid--autol o-grid--center o-grid--bottom">
    {Object.keys(settingTypes).map(type => (
      <div
        className="o-grid__cell u-4/12@tablet u-1/5@desktop u-margin-bottom-large"
        key={type}
      >
        <Field
          name={input.name}
          type="radio"
          component={RadioField}
          {...settingTypes[type]}
        />
      </div>
    ))}
  </div>
)

export default SettingField
