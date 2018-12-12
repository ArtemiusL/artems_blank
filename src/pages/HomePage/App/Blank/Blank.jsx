import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Blank.scss';

@CSSModules(styles, { allowMultiple: true })
class Blank extends PureComponent {
  getValueField = () => {
    const { fields } = this.props;
    const newObject = {};
    fields.forEach((item) => {
      newObject[item.name] = item.value;
    });
    return newObject;
  };

  render() {
    const {
      story,
    } = this.props;

    const content = this.getValueField();

    return (
      <div styleName="root">
        <h2 styleName="title">Ваша заявка</h2>
        <div styleName="blank">
          Здравствуйте, меня зовут <p styleName="value">{content.lastname} {content.name}</p><br />
          Хочу пройти у вас стажировку! <br />
          Дата рождения <p styleName="value">{content.date}</p> <br />
          Мой email: <p styleName="value">{content.email}</p> <br />
          О себе: <p styleName="longValue">{story}</p> <br />
        </div>
      </div>
    );
  }
}

Blank.propTypes = {
  fields: PropTypes.array,
  story: PropTypes.string,
};

export default Blank;
