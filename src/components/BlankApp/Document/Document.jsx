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
      date,
      email,
      story,
    } = this.props;
    return (
      <div styleName="main-blank-item">
        Здравствуйте, меня зовут <p styleName="main-blank-item__value">{lastname} {name}</p><br />
        Хочу пройти у вас стажировку! <br />
        Дата рождения <p styleName="main-blank-item__value">{date}</p> <br />
        Мой email: <p styleName="main-blank-item__value">{email}</p> <br />
        О себе: <p styleName="main-blank-item__longvalue">{story}</p> <br />
      </div>
    );
  }
}

Document.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  date: PropTypes.string,
  email: PropTypes.string,
  story: PropTypes.string,
};

export default Document;
