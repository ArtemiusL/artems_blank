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
      <div styleName="root">
        <h2 styleName="title">Ваша заявка</h2>
        <div styleName="blank">
          Здравствуйте, меня зовут <p styleName="value">{lastname} {name}</p><br />
          Хочу пройти у вас стажировку! <br />
          Дата рождения <p styleName="value">{date}</p> <br />
          Мой email: <p styleName="value">{email}</p> <br />
          О себе: <p styleName="longValue">{story}</p> <br />
        </div>
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
