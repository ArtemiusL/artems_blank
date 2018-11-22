/* eslint-disable */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Form.scss';

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  onValidateForm = () => {
    this.props.checkIsEmpty();
    this.props.checkIsDate();
  };

  handleChangeName = (evt) => {
    const { changeInputName } = this.props;
    changeInputName(evt.target.value);
  };

  handleChangeLastname = (evt) => {
    const { changeInputLastname } = this.props;
    changeInputLastname(evt.target.value);
  };

  handleChangeDate = (evt) => {
    const { changeInputDate } = this.props;
    changeInputDate(evt.target.value);
  };

  handleChangeEmail = (evt) => {
    const { changeInputEmail } = this.props;
    changeInputEmail(evt.target.value);
  };

  handleChangeStory = (evt) => {
    const { changeTextareaStory } = this.props;
    changeTextareaStory(evt.target.value);
  };


  render() {
    const { fieldIsEmpty, fieldDateIsNotCorrect } = this.props;
    return (
      <div styleName="site-left">
        <form styleName="main-form">
          <h3 styleName="main-form__title"> Введите информацию о себе </h3>
          <div styleName="form-flex">
            <p styleName="form-flex__description">* обозначены обязательные для заполнения поля</p>
            <div styleName="form-flex__item">
              <label>Введите имя *</label><br />
              <input styleName={this.checkClass}type="text" onChange={this.handleChangeName} /><br />
            </div>
            <div styleName="form-flex__item">
              <label>Введите фамилию *</label><br />
              <input type="text" onChange={this.handleChangeLastname} /><br />
            </div>
            <div styleName="form-flex__item">
              <label>Введите дату рождения *</label><br />
              <input type="text" placeholder="в формате ДД.ММ.ГГ" onChange={this.handleChangeDate} /><br />
            </div>
            <div styleName="form-flex__item">
              <label>Введите email *</label><br />
              <input type="text" onChange={this.handleChangeEmail} /><br />
            </div>
          </div>
        </form>
        <div styleName="main-form-item">
          <label>Напишите о себе</label><br />
          <textarea name="message" onChange={this.handleChangeStory} defaultValue="" /> <br />
          <button onClick={this.onValidateForm}>Подтвердить</button>
          <p styleName="main-form-item__validation">{fieldIsEmpty}<br />{fieldDateIsNotCorrect}</p>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  changeInputName: PropTypes.func,
  changeInputLastname: PropTypes.func,
  changeInputDate: PropTypes.func,
  changeInputEmail: PropTypes.func,
  changeTextareaStory: PropTypes.func,
  checkIsEmpty: PropTypes.func,
  checkIsDate: PropTypes.func,
  fieldIsEmpty: PropTypes.string,
  fieldDateIsNotCorrect: PropTypes.string,
};

export default CSSModules(Form, styles);
