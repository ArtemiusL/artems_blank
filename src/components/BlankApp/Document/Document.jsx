import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Document.scss';

@CSSModules(styles, { allowMultiple: true })
class Document extends PureComponent {
  render() {
    const {
      story,
      fields,
    } = this.props;

    return (
      <div styleName="root">
        <h2 styleName="title">Ваша заявка</h2>
        <div styleName="blank">
          Здравствуйте, меня зовут <p styleName="value">{fields[1].value} {fields[0].value}</p><br />
          Хочу пройти у вас стажировку! <br />
          Дата рождения <p styleName="value">{fields[2].value}</p> <br />
          Мой email: <p styleName="value">{fields[3].value}</p> <br />
          О себе: <p styleName="longValue">{story.value}</p> <br />
        </div>
      </div>
    );
  }
}

Document.propTypes = {
  fields: PropTypes.array,
  story: PropTypes.object,
};

export default Document;
