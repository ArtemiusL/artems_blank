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
    fieldDateIsNotCorrect: '',
  };

  changeInputName = (inputName) => {
    this.setState({
      name: inputName,
    });
  }

  changeInputLastname = (inputLastname) => {
    this.setState({
      lastname: inputLastname,
    });
  }

  changeInputDate = (inputDate) => {
    this.setState({
      date: inputDate,
    });
  }

  changeInputEmail = (inputEmail) => {
    this.setState({
      email: inputEmail,
    });
  }

  changeTextareaStory = (textareaStory) => {
    this.setState({
      story: textareaStory,
    });
  }

  notifyEmptyField = (textError) => {
    this.setState({
      fieldIsEmpty: textError,
    });
  }

  notifyWrongDate = (textError) => {
    this.setState({
      fieldDateIsNotCorrect: textError,
    });
  }

  checkIsEmpty = () => {
    const {
      name,
      lastname,
      email,
    } = this.state;

    if (name.trim().length === 0 || lastname.trim().length === 0 || email.trim().length === 0) {
      this.notifyEmptyField('Поля "имя", "фамилия", "email" обязательны для заполнения');
    } else {
      this.notifyEmptyField('');
    }
  };

  checkIsDate = () => {
    const { date } = this.state;
    if (!/\d\d\.\d\d\.\d\d\d\d/.test(date) || date.length !== 10) {
      this.notifyWrongDate('Дата введена неверно. Введите дату в формате ДД.ММ.ГГГГ');
    } else if (date.substr(1, 1) < 1 || date.substr(0, 2) > 31) {
      this.notifyWrongDate('Число введено не верно');
    } else if (date.substr(4, 1) < 1 || date.substr(3, 2) > 12) {
      this.notifyWrongDate('Месяц введен не верно');
    } else if (date.substr(6, 4) < 1950 || date.substr(6, 4) > 2001) {
      this.notifyWrongDate('Год введен не верно.');
    } else {
      this.notifyWrongDate('');
    }
  }

  render() {
    const {
      name,
      lastname,
      date,
      email,
      story,
      fieldIsEmpty,
      fieldDateIsNotCorrect,
    } = this.state;

    return (
      <div styleName="container">
        <h1 styleName="site-title">Заявка на стажировку</h1>
        <div styleName="site-flex">
          <Form
            changeInputName={this.changeInputName}
            changeInputLastname={this.changeInputLastname}
            changeInputDate={this.changeInputDate}
            changeInputEmail={this.changeInputEmail}
            changeTextareaStory={this.changeTextareaStory}
            checkIsEmpty={this.checkIsEmpty}
            checkIsDate={this.checkIsDate}
            fieldIsEmpty={fieldIsEmpty}
            fieldDateIsNotCorrect={fieldDateIsNotCorrect}
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

