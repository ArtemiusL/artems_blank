import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import FieldForm from '_components/FieldForm';

import styles from './Form.scss';

const constantFields = [
  {
    id: 1,
    fieldName: 'name',
    label: 'Введите имя',
    required: true,
  },
  {
    id: 2,
    fieldName: 'lastname',
    label: 'Введите фамилию',
    required: true,
  },
  {
    id: 3,
    fieldName: 'date',
    label: 'Введите дату рождения',
    placeholder: 'ДД.ММ.ГГГГ',
    required: true,
  },
  {
    id: 4,
    fieldName: 'email',
    label: 'Введите email',
    required: true,
  },
];

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  handleChangeStory = (evt) => {
    this.props.changeStory(evt.target.value);
  };

  createFieldForm = () => {
    const {
      fields,
      placeholder,
      changeInput,
      checkValidate,
    } = this.props;

    return constantFields.map((item) => {
      const { fieldName } = item;
      const currentFields = fields.map(field => field.name).indexOf(fieldName);
      if (currentFields === -1) {
        return null;
      }

      return (
        <FieldForm
          key={item.id}
          id={item.id}
          placeholder={placeholder}
          handleChangeInput={changeInput}
          handleCkeckValidate={checkValidate}
          error={fields[currentFields].error}
          data={fields[currentFields].value}
          {...item}
        />
      );
    });
  }

  render() {
    const fieldsForm = this.createFieldForm();

    return (
      <div styleName="root">
        <form styleName="form">
          <h3 styleName="title"> Введите информацию о себе </h3>
          <div styleName="formFlex">
            <p styleName="description">*поля, обязательные для заполнения</p>
            {fieldsForm}
          </div>
        </form>
        <div styleName="item">
          <label htmlFor="story">Напишите о себе<br />
            <textarea
              id="story"
              name="message"
              maxLength="1500"
              onChange={this.handleChangeStory}
              defaultValue=""
              placeholder="Максимальное количество символом - 1500"
            /> <br />
          </label>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.array,
  placeholder: PropTypes.string,
  changeInput: PropTypes.func,
  checkValidate: PropTypes.func,
  changeStory: PropTypes.func,
};

export default Form;
