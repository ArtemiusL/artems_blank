/* eslint-disable */
import React, { PureComponent } from 'react';

import CSSModules from 'react-css-modules';

import styles from './BlankApp.scss';
import Form from '_components/BlankApp/Form';
import Document from '_components/BlankApp/Document';

class BlankApp extends PureComponent {
  state = {
    name: '',
    lastname: '',
    age: 0,
    email: '',
    story: '',
  };

  changeInputName = (string) => {
    this.setState({
      name: string,
    });
  }

  changeInputLastname = (inputLastname) => {
    this.setState({
      lastname: inputLastname,
    });
  }

  changeInputAge = (inputAge) => {
    this.setState({
      age: inputAge,
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

  validateData = () => {
    const nextState = {
      value: this.value,
      err: this.err,
    };
    if (this.value === '') {
      nextState.err = 'Поле должно быть заполнено';
    }
    return nextState;
  };

  render() {
    const {
      name,
      lastname,
      age,
      email,
      story,
    } = this.state;
    return (
      <div styleName="container">
        <h1 styleName="site-title">Заявка на стажировку</h1>
        <div styleName="site-flex">
          <Form
            changeInputName={this.changeInputName}
            changeInputLastname={this.changeInputLastname}
            changeInputAge={this.changeInputAge}
            changeInputEmail={this.changeInputEmail}
            changeTextareaStory={this.changeTextareaStory}
            validateData={this.validateData}
          />
          <Document
            name={name}
            lastname={lastname}
            age={age}
            email={email}
            story={story}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(BlankApp, styles);

