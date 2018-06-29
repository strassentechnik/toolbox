import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import ConfiguratorForm from './components/ConfiguratorForm'

const targetUrls = {
  development: 'http://localhost:3000/messages',
  staging: 'https://nadler-staging.herokuapp.com/messages',
  production: 'https://www.strassentechnik.de/messages',
}

export default class Configurator extends React.Component {
  static propTypes = {
    mode: PropTypes.oneOf(['development', 'staging', 'production']),
  }

  getTargetUrl = () => targetUrls[this.props.mode]

  handleSubmit = (values, form, complete) =>
    axios
      .post(this.getTargetUrl(), { message: values })
      .then(() => {
        form.reset()
        complete()
      })
      .catch(error => {
        complete(error)
      })

  render() {
    return (
      <div>
        <ConfiguratorForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
