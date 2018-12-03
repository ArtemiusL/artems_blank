
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Form.scss';
import FieldForm from './FieldForm';

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  handleChangeStory = (evt) => {
    const { changeTextareaStory } = this.props;
    changeTextareaStory(evt.target.value);
  };

  render() {
    const {
      name,
      lastname,
      date,
      email,
      formErrors,
      nameValid,
      lastnameValid,
      emailValid,
      dateValid,
      changeInput,
    } = this.props;
    return (
      <div styleName="site-left">
        <form styleName="main-form">
          <h3 styleName="main-form__title"> Введите информацию о себе </h3>
          <div styleName="form-flex">
            <p styleName="form-flex__description">* обозначены обязательные для заполнения поля</p>
            <FieldForm
              label="Введите имя*"
              fieldName="name"
              data={name}
              handleChangeInput={changeInput}
              formErrors={formErrors}
              fieldValid={nameValid}
            /> <br />
            <FieldForm
              label="Введите фамилию*"
              fieldName="lastname"
              data={lastname}
              handleChangeInput={changeInput}
              formErrors={formErrors}
              fieldValid={lastnameValid}
            /> <br />
            <FieldForm
              label="Введите дату рождения*"
              fieldName="date"
              data={date}
              handleChangeInput={changeInput}
              placeholder="ДД.ММ.ГГГГ"
              formErrors={formErrors}
              fieldValid={dateValid}
            /> <br />
            <FieldForm
              label="Введите email*"
              fieldName="email"
              data={email}
              handleChangeInput={changeInput}
              formErrors={formErrors}
              fieldValid={emailValid}
            /> <br />
          </div>
        </form>
        <div styleName="main-form-item">
          <label htmlFor="story">Напишите о себе<br />
            <textarea id="story" name="message" onChange={this.handleChangeStory} defaultValue="" /> <br />
          </label>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  date: PropTypes.string,
  email: PropTypes.string,
  changeInput: PropTypes.func,
  changeTextareaStory: PropTypes.func,
  formErrors: PropTypes.object,
  nameValid: PropTypes.bool,
  lastnameValid: PropTypes.bool,
  dateValid: PropTypes.bool,
  emailValid: PropTypes.bool,
};

export default Form;
