import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldFormError from './FieldFormError';

import styles from './FieldForm.scss';

@CSSModules(styles, { allowMultiple: true })
class FieldForm extends PureComponent {
  render() {
    const {
      data,
      placeholder,
      id,
      fieldName,
      label,
      error,
      handleChangeInput,
      handleCkeckValidate,
    } = this.props;

    return (
      <div styleName="root">
        <label styleName="description" htmlFor={fieldName}>{label}<br />
          <input
            styleName={classnames('input')}
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
        <FieldFormError
          error={error}
        />
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
};

export default FieldForm;
