import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldFormError from './FieldFormError';

import styles from './FieldForm.scss';

@CSSModules(styles, { allowMultiple: true })
class FieldForm extends PureComponent {
  createFieldError = () => {
    const { error } = this.props;
    if (error) {
      return (<FieldFormError error={error} />
      );
    }
    return false;
  }
  render() {
    const {
      data,
      placeholder,
      id,
      fieldName,
      label,
      required,
      handleChangeInput,
      handleCkeckValidate,
    } = this.props;

    const hasError = this.createFieldError();
    return (
      <div styleName="root">
        <label styleName="description" htmlFor={fieldName}>{label}{required && '*'}<br />
          <input
            styleName={classnames('input', { hasError })}
            id={id}
            type="text"
            required
            placeholder={placeholder}
            value={data}
            name={fieldName}
            onChange={handleChangeInput}
            onBlur={handleCkeckValidate}
          />
        </label>
        {hasError}
      </div>
    );
  }
}

FieldForm.propTypes = {
  fieldName: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.number,
  data: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  handleChangeInput: PropTypes.func,
  handleCkeckValidate: PropTypes.func,
  required: PropTypes.bool,
};

export default FieldForm;
