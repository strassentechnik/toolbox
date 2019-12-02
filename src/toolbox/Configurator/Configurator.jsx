import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ConfiguratorForm from './components/ConfiguratorForm';

const targetUrls = {
  development: 'http://localhost:3000/messages.json',
  staging: 'https://nadler-staging.herokuapp.com/messages.json',
  production: 'https://www.strassentechnik.de/messages.json',
};

export default class Configurator extends React.Component {
  static propTypes = {
    mode: PropTypes.oneOf(['development', 'staging', 'production']),
    target: PropTypes.string,
    product_id: PropTypes.string,
  };

  getTargetUrl = () => targetUrls[this.props.mode];

  buildParams = (formValues) => {
    return {
      message: {
        ...formValues,
        product_id: this.props.product_id,
      },
      target: this.props.target,
    };
  };

  handleSubmit = (values, form, complete) =>
    axios
      .post(this.getTargetUrl(), this.buildParams(values))
      .then(resp => {
        form.reset();
        complete();
        if (resp.data && resp.data.target) {
          setTimeout(() => {
            // Send message to outer window so that we can track it accordingly
            window.parent.postMessage(
              {event_id: 'configComplete', target: resp.data.target},
              '*',
            );
          }, 3500);
        }
      })
      .catch(error => {
        complete(error);
      });

  render() {
    return (
      <div>
        <ConfiguratorForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
