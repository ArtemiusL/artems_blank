import React, { PureComponent } from 'react';

import CSSModules from 'react-css-modules';

import styles from './BlankApp.scss';
import Form from './Form';
import Document from './Document';

class BlankApp extends PureComponent {
  state = {
    name: '',
    lastname: '',
    date: '',
    email: '',
    story: '',
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

  updateInput = ({ target: { name, value } }) => {
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
      case 'name':
        nameValid = value.trim().length === 0;
        formErrors.name = nameValid ? ' Поле "имя" должно быть заполнено' : '';
        break;
      case 'lastname':
        lastnameValid = value.trim().length === 0;
        formErrors.lastname = lastnameValid ? 'Поле "фамилия" должно быть заполнено' : '';
        break;
      case 'date':
        if (!/([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/.test(value.trim())) {
          dateValid = true;
          formErrors.date = 'Дата введена неверно. Введите дату в формате ДД.ММ.ГГГГ';
        } else {
          dateValid = false;
          formErrors.date = '';
        }
        break;
      case 'email':
        if (!(/([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value.trim())) {
          emailValid = true;
          formErrors.email = ' Неправильный формат еmail';
        } else {
          emailValid = false;
          formErrors.email = '';
        }
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

  render() {
    const {
      name,
      lastname,
      date,
      email,
      story,
      formValid,
      formErrors,
      dateValid,
      nameValid,
      lastnameValid,
      emailValid,
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
            changeInput={this.updateInput}
            changeTextareaStory={this.changeTextareaStory}
            isValidateForm={formValid}
            formErrors={formErrors}
            emailValid={emailValid}
            lastnameValid={lastnameValid}
            nameValid={nameValid}
            dateValid={dateValid}
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

