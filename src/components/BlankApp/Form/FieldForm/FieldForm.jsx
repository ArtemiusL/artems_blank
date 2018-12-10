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
      handleChangeInput,
      placeholder,
      id,
      fieldName,
      label,
      error,
    } = this.props;

    return (
      <div styleName="root">
        <label htmlFor={fieldName}>{label}<br />
          <input
            id={id}
            styleName={classnames('input')}
            type="text"
            required
            value={data}
            name={fieldName}
            onChange={handleChangeInput}
            placeholder={placeholder}
            onBlur={handleChangeInput}
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
  handleChangeInput: PropTypes.func,
  data: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.number,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default FieldForm;
