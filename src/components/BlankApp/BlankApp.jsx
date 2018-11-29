import React, { PureComponent } from 'react';

import CSSModules from 'react-css-modules';

import styles from './BlankApp.scss';
import Form from '_components/BlankApp/Form';
import Document from '_components/BlankApp/Document';

class BlankApp extends PureComponent {
  state = {
    name: '',
    lastname: '',
    date: '',
    email: '',
    story: '',
    fieldIsEmpty: '',
    formErrors: {
      email: '',
      name: '',
      lastname: '',
      date: '',
    },
    emailValid: false,
    nameValid: false,
    lastnameValid: false,
    dateValid: false,
    formValid: false,
  };

  changeTextareaStory = (textareaStory) => {
    this.setState({
      story: textareaStory,
    });
  }

  updateInputName = ({ target: { name, value } }) => {
    this.setState({ [name]: value },
      () => { this.validateField(name, value); },
    );
  }

  validateField = (fieldName, value) => {
    const { formErrors } = this.state;
    let {
      emailValid,
      nameValid,
      lastnameValid,
      dateValid,
    } = this.state;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? '' : ' Неправильный формат еmail';
        break;
      case 'name':
        nameValid = value.trim().length > 0;
        formErrors.name = nameValid ? '' : ' Поле "имя" должно быть заполнено';
        break;
      case 'lastname':
        lastnameValid = value.length > 0;
        formErrors.lastname = lastnameValid ? '' : 'Поле "фамилия" должно быть заполнено';
        break;
      case 'date':
        dateValid = /\d\d\.\d\d\.\d\d\d\d/.test(value);
        formErrors.date = dateValid ? '' : 'Дата введена неверно. Введите дату в формате ДД.ММ.ГГГГ';
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      emailValid,
      nameValid,
      lastnameValid,
      dateValid,
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid:
      this.state.emailValid &&
      this.state.nameValid &&
      this.state.lastnameValid &&
      this.state.dateValid,
    });
  }
  /*
  notifyEmptyField = (field, textError) => {
    this.setState({
      [field]: { err: textError },
    });
  }
  */

  render() {
    const {
      name,
      lastname,
      date,
      email,
      story,
      fieldIsEmpty,
      formValid,
      formErrors,
    } = this.state;
    return (
      <div styleName="container">
        <h1 styleName="site-title">Заявка на стажировку</h1>
        <div styleName="site-flex">
          <Form
            lastname={lastname}
            name={name}
            date={date}
            email={email}
            fieldIsEmpty={fieldIsEmpty}
            changeInputName={this.updateInputName}
            changeTextareaStory={this.changeTextareaStory}
            handleEmptyField={this.notifyEmptyField}
            isValidateForm={formValid}
            validateField={this.validateField}
            formErrors={formErrors}
          />
          <div styleName="site-right">
            <section styleName="main-blank">
              <h2 styleName="main-blank__title">Ваша заявка</h2>
              <div styleName="blank-flex">
                <Document
                  name={name}
                  lastname={lastname}
                  date={date}
                  email={email}
                  story={story}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(BlankApp, styles);

