import React from 'react'
import { Form, Field } from 'react-final-form'
import cx from 'classnames'

const TextField = ({ input, meta, type, ...props }) => {
  const classes = cx('c-field-text', {
    'c-field-text--error': meta.error && meta.touched,
  })

  return (
    <div>
      {type === 'textarea' ? (
        <textarea {...input} {...props} className={classes} />
      ) : (
        <input {...input} {...props} className={classes} />
      )}
      {meta.error &&
        meta.touched && <div className="c-field-error">{meta.error}</div>}
    </div>
  )
}

export default TextField
