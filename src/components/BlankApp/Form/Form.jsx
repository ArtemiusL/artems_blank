import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Form.scss';
import FieldForm from './FieldForm';

const constantFields = [
  {
    id: 1,
    fieldName: 'name',
    label: 'Введите имя*',
  },
  {
    id: 2,
    fieldName: 'lastname',
    label: 'Введите фамилию*',
  },
  {
    id: 3,
    fieldName: 'date',
    label: 'Введите дату рождения*',
  },
  {
    id: 4,
    fieldName: 'email',
    label: 'Введите email*',
  },
];

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  handleChangeStory = (evt) => {
    const { changeStory } = this.props;
    changeStory(evt.target.value);
  };

  createFieldForm = () => {
    const {
      changeInput,
      fields,
      isValidFields,
      hasError,
    } = this.props;
    return constantFields.map((item) => {
      const { fieldName } = item;
      const currentFields = fields.filter(field => field.name === fieldName);
      return (
        <FieldForm
          key={item.id}
          id={item.id}
          handleChangeInput={changeInput}
          data={currentFields[0].value}
          error={currentFields[0].error}
          isValidFields={isValidFields}
          hasError={hasError}
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
  fields: PropTypes.object,
  changeInput: PropTypes.func,
  changeStory: PropTypes.func,
  hasError: PropTypes.bool,
  isValidFields: PropTypes.func,
};

export default Form;
