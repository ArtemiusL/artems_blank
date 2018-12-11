import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import Form from './Form';
import Document from './Document';

import styles from './BlankApp.scss';

class BlankApp extends PureComponent {
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
    story: {
      value: '',
    },
  };

  changeStory = (value) => {
    const { story } = this.state;
    this.setState({
      story: { ...story, value },
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
        this.isEmptyField(fieldName, value);
        break;
      case 'lastname':
        this.isEmptyField(fieldName, value);
        break;
      case 'date':
        this.isDateValid(fieldName, value);
        break;
      case 'email':
        this.isEmailValid(fieldName, value);
        break;
      default:
        break;
    }
  }

  isEmptyField = (fieldName, value) => {
    this.handleChangeFieldErr(fieldName, value, (value.trim().length === 0) ? 'Поле должно быть заполнено!' : '');
  }

  isDateValid = (fieldName, value) => {
    this.handleChangeFieldErr(
      fieldName,
      value,
      (!/([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})$/.test(value.trim())) ? 'Дата введена неверно. Введите дату в формате ДД.ММ.ГГГГ!' : '');
  }

  isEmailValid = (fieldName, value) => {
    this.handleChangeFieldErr(
      fieldName,
      value,
      (!(/([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value.trim())) ? 'Неправильный формат еmail' : '');
  }

  handleChangeFieldErr = (fieldName, value, textErr) => {
    const { fields } = this.state;
    const getNewState = () => (
      fields.map((item) => {
        if (item.name === fieldName) {
          const newItem = { ...item, value, error: textErr };
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
            <Document
              story={story}
              fields={fields}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(BlankApp, styles);
