/* eslint-disable */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Form.scss';
import FieldForm from '_components/BlankApp/Form/FieldForm';

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
/*
   onValidateForm = () => {
    this.checkIsEmpty();
  };

  notifyEmptyField = (textError) => {
    this.props.handleEmptyField('lastname', textError);
  }

  checkIsEmpty = () => {
    const { lastname } = this.props;
    if (lastname.trim().length === 0) {
      this.notifyEmptyField('Поле обязательно для заполнения');
    } else {
      this.notifyEmptyField('');
    }
  }
*/
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
      changeInputName,
      fieldIsEmpty,
      isValidateForm,
      formErrors,
    } = this.props;
    return (
      <div styleName="site-left">
        <form styleName="main-form">
          <h3 styleName="main-form__title"> Введите информацию о себе </h3>
          <div styleName="form-flex">
            <p styleName="form-flex__description">* обозначены обязательные для заполнения поля</p>
            <FieldForm
              label="Введите имя *"
              fieldName="name"
              data={name}
              handleChangeInput={changeInputName}
              fieldIsEmpty={fieldIsEmpty}
              formErrors={formErrors}
            /> <br />
            <FieldForm
              label="Введите фамилию *"
              fieldName="lastname"
              data={lastname}
              handleChangeInput={changeInputName}
              fieldIsEmpty={fieldIsEmpty}
              formErrors={formErrors}
            /> <br />
            <FieldForm
              label="Введите дату рождения "
              fieldName="date"
              data={date}
              handleChangeInput={changeInputName}
              placeholder="ДД.ММ.ГГГГ"
              fieldIsEmpty={fieldIsEmpty}
              formErrors={formErrors}
            /> <br />
            <FieldForm
              label="Введите email *"
              fieldName="email"
              data={email}
              handleChangeInput={changeInputName}
              fieldIsEmpty={fieldIsEmpty}
              formErrors={formErrors}
            /> <br />
          </div>
        </form>
        <div styleName="main-form-item">
          <label>Напишите о себе</label><br />
          <textarea name="message" onChange={this.handleChangeStory} defaultValue="" /> <br />
          <button
            disabled={!(isValidateForm)}
            onClick={this.props.validateField}
          >Подтвердить
          </button>
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
  changeInputName: PropTypes.func,
  changeTextareaStory: PropTypes.func,
  fieldIsEmpty: PropTypes.string,
  /*handleEmptyField: PropTypes.func,*/
  isValidateForm: PropTypes.bool,
  formErrors: PropTypes.object,
  validateField: PropTypes.func,
};

export default CSSModules(Form, styles);
