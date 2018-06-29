import React from 'react'
import { Form, Field } from 'react-final-form'
import Slider from 'react-rangeslider'

const PayloadSliderField = ({ input, meta }) => (
  <Slider
    orientation="horizontal"
    format={value => `${value} t`}
    min={1}
    max={28}
    value={input.value}
    onChange={input.onChange}
  />
)

export default PayloadSliderField
