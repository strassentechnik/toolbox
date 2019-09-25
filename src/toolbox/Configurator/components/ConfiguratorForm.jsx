import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import TextField from './TextField'
import VehicleTypeField from './VehicleTypeField'
import PurposeField from './PurposeField'
import SettingField from './SettingField'
import PayloadSliderField from './PayloadSliderField'
import LayoutField from './LayoutField'
import checkImage from 'assets/images/check.svg'

const required = value => (value ? undefined : 'Erforderlich')

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Geben Sie bitte Ihren Namen an'
  }

  if (!values.email && values.contact === 'email') {
    errors.email = 'Bitte eine E-Mail Adresse angeben'
  }

  if (!values.phone && values.contact === 'callback') {
    errors.phone = 'Bitte eine Telefonnummer angeben'
  }

  if (!values.terms) {
    errors.terms = 'Bitte stimmen Sie der Datenschutzerklärung zu'
  }

  return errors
}

const initialValues = {
  type: 'thermo_offer',
  subject: '[AMTEC] Angebot erstellen',
  product_id: '6',
  data: {
    payload: 15,
    contact: 'email',
  },
}

const ConfiguratorForm = ({ onSubmit }) => (
  <Form
    initialValues={initialValues}
    onSubmit={onSubmit}
    validate={validate}
    render={({
      handleSubmit,
      submitting,
      submitSucceeded,
      pristine,
      invalid,
      values,
      errors,
    }) => (
      <form onSubmit={handleSubmit}>
        <Field name="type" component="input" type="hidden" />
        <Field name="product_id" component="input" type="hidden" />
        <Field name="subject" component="input" type="hidden" />
        <div className="u-margin-bottom-huge">
          <h2 className="c-h3 u-text-center u-margin-bottom-large">
            Fahrzeugtyp
          </h2>
          <Field
            name="data[type]"
            component={VehicleTypeField}
            validate={required}
          />
        </div>

        <div className="u-margin-bottom-huge">
          <h2 className="c-h3 u-text-center u-margin-bottom-large">
            max. Nutzlast (in Tonnen)
          </h2>
          <Field
            name="data[payload]"
            component={PayloadSliderField}
            validate={required}
          />
        </div>

        <div className="u-margin-bottom-huge">
          <h2 className="c-h3 u-text-center u-margin-bottom-large">
            Verwendungszweck
          </h2>
          <Field
            name="data[purpose]"
            component={PurposeField}
            validate={required}
          />
        </div>

        <div className="u-margin-bottom-huge">
          <h2 className="c-h3 u-text-center u-margin-bottom-large">
            Aufbauart wählen
          </h2>
          <Field
            name="data[setting]"
            component={SettingField}
            validate={required}
          />
        </div>

        <div className="u-margin-bottom-huge">
          <h2 className="c-h3 u-text-center u-margin-bottom-large">
            Aufteilung
          </h2>
          <Field
            name="data[layout]"
            component={LayoutField}
            validate={required}
          />
        </div>

        <div className="o-grid o-grid--center">
          <div className="o-grid__cell u-6/12 o-grid o-grid--small">
            <div className="o-grid__cell u-margin-bottom-small">
              <Field
                name="data[contact]"
                component="select"
                className="c-field-select"
              >
                <option value="email">Angebot per E-Mail</option>
                <option value="callback">Rückruf zum Angebot</option>
              </Field>
            </div>
            <div className="o-grid__cell u-6/12 u-margin-bottom-small">
              <Field
                name="company"
                component={TextField}
                placeholder="Ihre Firma"
                className="c-field-text"
              />
            </div>

            <div className="o-grid__cell u-6/12 u-margin-bottom-small">
              <Field
                name="name"
                component={TextField}
                type="text"
                placeholder="Ihr Name"
                className="c-field-text"
              />
            </div>

            {values.data.contact === 'email' && (
              <div className="o-grid__cell u-margin-bottom-small">
                <Field
                  name="email"
                  component={TextField}
                  type="email"
                  placeholder="E-Mail Adresse eingeben"
                  className="c-field-text"
                />
              </div>
            )}

            {values.data.contact === 'callback' && (
              <div className="o-grid__cell u-margin-bottom-small">
                <Field
                  name="phone"
                  component={TextField}
                  type="phone"
                  placeholder="Telefonnummer eingeben"
                  className="c-field-text"
                />
              </div>
            )}

            <div className="o-grid__cell u-margin-bottom-small">
              <Field
                name="body"
                component={TextField}
                type="textarea"
                placeholder="Ihre Nachricht"
                className="c-field-text"
              />
            </div>

            <div className="o-grid__cell u-margin-bottom-small">
              <label>
                <Field
                  name="terms"
                  type="checkbox"
                  component="input"
                  className="c-field-checkbox"
                />
                * Ich habe die{' '}
                <a
                  className="c-action"
                  href="https://www.strassentechnik.de/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hinweise zum Schutz meiner persönlichen Daten
                </a>{' '}
                gelesen und akzeptiere diese.
              </label>
            </div>

            {values.data.contact === 'callback' && (
              <div className="o-grid__cell u-margin-bottom-small">
                <label htmlFor="phone_consent">
                  <Field
                    name="phone_consent"
                    type="checkbox"
                    component="input"
                    className="c-field-checkbox"
                  />
                  Ich erkläre mich damit einverstanden, dass meine Telefonnummer
                  von der Firma Nadler zur Kontaktaufnahme verwendet werden
                  darf. Diese Einwilligung zur Nutzung meiner Telefonnummer kann
                  ich jederzeit für die Zukunft widerrufen, indem ich eine
                  E-Mail an info@strassentechnik.de sende.
                </label>
              </div>
            )}

            {submitSucceeded && (
              <div className="o-grid__cell u-margin-bottom-small">
                <div className="c-alert c-alert--success u-text-center u-margin-bottom-small">
                  <img src={checkImage} alt="" className="c-alert__icon" />
                  <p>
                    Ihre Anfrage wurde abgeschickt und wird schnellstmöglich von
                    uns bearbeitet.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="u-text-center">
          <button
            type="submit"
            disabled={submitting || pristine || invalid}
            className="c-btn c-btn--primary"
          >
            Angebot einholen
          </button>
        </div>
      </form>
    )}
  />
)

ConfiguratorForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ConfiguratorForm
