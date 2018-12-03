import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldFormError from './FieldFormError';

import styles from './FieldForm.scss';

@CSSModules(styles, { allowMultiple: true })
class FieldForm extends PureComponent {
  checkClassName = () => {
    const { formErrors, fieldName } = this.props;
    return formErrors[fieldName].length > 0;
  };

  render() {
    const {
      data,
      fieldName,
      label,
      handleChangeInput,
      placeholder,
      formErrors,
    } = this.props;
    const hasError = this.checkClassName();
    return (
      <div styleName="root">
        <label htmlFor={fieldName}>{label}<br />
          <input
            id={fieldName}
            styleName={classnames('input', { hasError })}
            type="text"
            required
            name={fieldName}
            value={data}
            onChange={handleChangeInput}
            placeholder={placeholder}
            onBlur={handleChangeInput}
          />
        </label>
        { Object.keys(formErrors).map((name) => {
          if (formErrors[name].length > 0 && name === fieldName) {
            return (
              <FieldFormError
                key={name.i}
                error={formErrors[name]}
              />
            );
          }
          return '';
        })}
      </div>
    );
  }
}


FieldForm.propTypes = {
  handleChangeInput: PropTypes.func,
  data: PropTypes.string,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  formErrors: PropTypes.object,
  placeholder: PropTypes.string,
};

export default FieldForm;
