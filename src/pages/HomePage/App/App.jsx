import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import Form from './Form';
import Blank from './Blank';

import styles from './App.scss';

class App extends PureComponent {
  state = {
    fields: [
      {
        name: 'name',
        value: '',
        error: '',
      },
      {
        name: 'lastname',
        value: '',
        error: '',
      },
      {
        name: 'date',
        value: '',
        error: '',
      },
      {
        name: 'email',
        value: '',
        error: '',
      },
    ],
    story: '',
  };

  changeStory = (value) => {
    this.setState({
      story: value,
    });
  }

  updateInput = ({ target: { name, value } }) => {
    const { fields } = this.state;
    const getNewState = () => (
      fields.map((item) => {
        if (item.name === name) {
          const newItem = { ...item, value };
          return newItem;
        }
        return item;
      })
    );
    const newFields = getNewState();

    this.setState({
      fields: newFields,
    });
  }

  checkValidate = ({ target: { name, value } }) => {
    this.validateField(name, value);
  }

  validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
      case 'lastname':
        this.handleChangeFieldErr(fieldName, this.isEmptyField(value));
        break;
      case 'date':
        this.handleChangeFieldErr(fieldName, this.isDateValid(value));
        break;
      case 'email':
        this.handleChangeFieldErr(fieldName, this.isEmailValid(value));
        break;
      default:
        break;
    }
  }

  isEmptyField = (value) => {
    if (value.trim().length === 0) {
      return 'Поле должно быть заполнено!';
    }
    return '';
  }

  isDateValid = (value) => {
    if (!/([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})$/.test(value.trim())) {
      return 'Дата введена неверно. Введите дату в формате ДД.ММ.ГГГГ!';
    }
    return '';
  }

  isEmailValid = (value) => {
    if (!(/([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value.trim())) {
      return 'Неправильный формат еmail';
    }
    return '';
  }

  handleChangeFieldErr = (fieldName, textErr) => {
    const { fields } = this.state;
    const getNewState = () => (
      fields.map((item) => {
        if (item.name === fieldName) {
          const newItem = { ...item, error: textErr };
          return newItem;
        }
        return item;
      })
    );
    const newFields = getNewState();
    this.setState({
      fields: newFields,
    });
  }

  render() {
    const {
      fields,
      story,
      className,
    } = this.state;

    return (
      <div className={className} styleName="root">
        <h1 styleName="title">Заявка на стажировку</h1>
        <div styleName="site">
          <Form
            fields={fields}
            changeInput={this.updateInput}
            changeStory={this.changeStory}
            checkValidate={this.checkValidate}
          />
          <div styleName="right">
            <Blank
              story={story}
              fields={fields}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
