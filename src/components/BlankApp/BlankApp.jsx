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

  changeStory = (valueStory) => {
    const { story } = this.state;
    this.setState({
      story: { ...story, value: valueStory },
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
    this.validateField(name, value);
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

  isEmptyField = (fieldName, value) => {
    if (value.trim().length === 0) {
      this.handleChangeFieldErr(fieldName, value, 'Поле должно быть заполнено!');
    } else {
      this.handleChangeFieldErr(fieldName, value, '');
    }
  }

  isDateValid = (fieldName, value) => {
    if (!/([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})$/.test(value.trim())) {
      this.handleChangeFieldErr(fieldName, value, 'Дата введена неверно. Введите дату в формате ДД.ММ.ГГГГ!');
    } else {
      this.handleChangeFieldErr(fieldName, value, '');
    }
  }

  isEmailValid = (fieldName, value) => {
    if (!(/([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value.trim())) {
      this.handleChangeFieldErr(fieldName, value, 'Неправильный формат еmail');
    } else {
      this.handleChangeFieldErr(fieldName, value, '');
    }
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

  render() {
    console.log('render blank app');
    const {
      fields,
      story,
      styleName,
    } = this.state;
    return (
      <div className={styleName} styleName="root">
        <h1 styleName="title">Заявка на стажировку</h1>
        <div styleName="site">
          <Form
            fields={fields}
            changeInput={this.updateInput}
            changeStory={this.changeStory}
            isValidFields={this.validateField}
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

