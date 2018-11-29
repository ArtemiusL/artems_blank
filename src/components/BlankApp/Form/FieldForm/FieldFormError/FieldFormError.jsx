import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './FieldFormError.scss';

class FieldFormError extends PureComponent {
  render() {
    const {
      error,
    } = this.props;
    return (
      <div styleName="root">
        {error}
      </div>
    );
  }
}

FieldFormError.propTypes = {
  error: PropTypes.string,
};

export default CSSModules(FieldFormError, styles);
