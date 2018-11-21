import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import PropTypes from 'prop-types';
import styles from './Document.scss';

@CSSModules(styles, { allowMultiple: true })

class Document extends PureComponent {
  render() {
    const {
      name,
      lastname,
      age,
      email,
      story,
    } = this.props;
    return (
      <div styleName="main-blank"><br />
        Твоё имя: {name} <br />
        Твоя фамилия: {lastname}<br />
        Твой возраст: {age}<br />
        Твой email: {email}<br />
        О себе: {story}
      </div>
    );
  }
}

Document.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.string,
  email: PropTypes.string,
  story: PropTypes.string,
};

export default CSSModules(Document, styles);
