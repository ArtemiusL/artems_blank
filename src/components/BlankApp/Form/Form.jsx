/* eslint-disable */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Form.scss';

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  
  handleChangeName = (evt) => {
    const { changeInputName } = this.props;
    changeInputName(evt.target.value);
  };

  handleChangeLastname = (evt) => {
    const { changeInputLastname } = this.props;
    changeInputLastname(evt.target.value);
  };

  handleChangeAge = (evt) => {
    const { changeInputAge } = this.props;
    changeInputAge(evt.target.value);
  };

  handleChangeEmail = (evt) => {
    const { changeInputEmail } = this.props;
    changeInputEmail(evt.target.value);
  };

  handleChangeStory = (evt) => {
    const { changeTextareaStory } = this.props;
    changeTextareaStory(evt.target.value);
  };

  onValidateForm = (name) => {
    const { validateData } = this.props;
    validateData(name);
  }

  render() {
    return (
      <div styleName="site-left">
        <form>
          <label>Введите имя</label><br />
          <input type="text" onChange={this.handleChangeName} /><br />
          <label>Введите фамилию</label><br />
          <input type="text" onChange={this.handleChangeLastname} /><br />
          <label>Введите возраст</label><br />
          <input type="text" onChange={this.handleChangeAge} /><br />
          <label>Введите email</label><br />
          <input type="text" onChange={this.handleChangeEmail} /><br />
        </form>
        <label>Напишите о себе</label><br />
        <textarea name="message" onChange={this.handleChangeStory}></textarea>
        <button onClick={this.onValidateForm}>Проверить</button>
      </div>
    );
  }
}

export default CSSModules(Form, styles);
