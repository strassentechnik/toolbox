import React from 'react'

const RadioIcon = ({ image, ...props }) => (
  <img
    src={image}
    alt="Test"
    {...props}
    style={{
      height: 48,
    }}
  />
)

const RadioField = ({ input, meta, image, label }) => (
  <label
    style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {image && <RadioIcon image={image} className="u-margin-bottom-small" />}
    <div
      className="u-margin-bottom-small u-text-center"
      style={{
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>{label}</span>
    </div>
    <input {...input} type="radio" />
    <div className="c-field-radio" />
  </label>
)

export default RadioField
