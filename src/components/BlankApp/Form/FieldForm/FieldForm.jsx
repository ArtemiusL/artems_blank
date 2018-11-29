/* eslint-disable */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import FieldFormError from './FieldFormError';

import styles from './FieldForm.scss';

@CSSModules(styles, { allowMultiple: true })
class FieldForm extends PureComponent {
  render() {
    const {
      data,
      fieldName,
      label,
      handleChangeInput,
      placeholder,
      formErrors,
    } = this.props;
    return (
      <div styleName="form-flex__item">
        <label>{label}</label><br />
        <input
          required
          name={fieldName}
          type="text"
          value={data}
          onChange={handleChangeInput}
          placeholder={placeholder}
        />
        { Object.keys(formErrors).map((name) => {
          if (formErrors[name].length > 0 && name === fieldName) {
            return (
              <FieldFormError
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

export default CSSModules(FieldForm, styles);
