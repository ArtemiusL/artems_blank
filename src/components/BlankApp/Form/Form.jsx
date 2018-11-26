/* eslint-disable */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Form.scss';

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  checkClassName = () => {
    const { fieldIsEmpty } = this.props;
    return fieldIsEmpty.length !== 0;
  };

  onValidateForm = () => {
    this.props.checkIsEmpty();
    this.props.checkDate();
    this.props.checkEmail();
    this.checkClassName();
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
    const { fieldIsEmpty, fieldDateIsNotCorrect, fieldEmailIsInvalid} = this.props;
    const hasError = this.checkClassName();
    return (
      <div styleName="site-left">
        <form styleName="main-form">
          <h3 styleName="main-form__title"> Введите информацию о себе </h3>
          <div styleName="form-flex">
            <p styleName="form-flex__description">* обозначены обязательные для заполнения поля</p>
            <div styleName="form-flex__item">
              <label htmlFor="name">Введите имя *</label><br />
              <input styleName={classnames('input', { hasError })} type="text" name="name" onChange={this.handleChangeName} /><br />
            </div>
            <div styleName="form-flex__item">
              <label htmlFor="lastname">Введите фамилию *</label><br />
              <input styleName={classnames('input', { hasError})} type="text" onChange={this.handleChangeLastname} /><br />
            </div>
            <div styleName="form-flex__item">
              <label htmlFor="date">Введите дату рождения *</label><br />
              <input styleName={classnames('input', { hasError })} type="text" placeholder="ДД.ММ.ГГГГ" onChange={this.handleChangeDate} /><br />
            </div>
            <div styleName="form-flex__item">
              <label htmlFor="email">Введите email *</label><br />
              <input styleName={classnames('input', { hasError })} type="text" name="email" onChange={this.handleChangeEmail} /><br />
            </div>
          </div>
        </form>
        <div styleName="main-form-item">
          <label  htmlFor="story">Напишите о себе</label><br />
          <textarea name="message" onChange={this.handleChangeStory} defaultValue="" /> <br />
          <button onClick={this.onValidateForm}>Подтвердить</button>
          <p styleName="main-form-item__validation">{fieldIsEmpty}<br />{fieldDateIsNotCorrect}<br />{fieldEmailIsInvalid}</p>
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
  checkDate: PropTypes.func,
  checkEmail: PropTypes.func,
  fieldIsEmpty: PropTypes.string,
  fieldDateIsNotCorrect: PropTypes.string,
  fieldEmailIsInvalid: PropTypes.string,
};

export default CSSModules(Form, styles);
