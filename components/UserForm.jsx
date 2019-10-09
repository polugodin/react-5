import React, { Component } from 'react';

import { createUser, showError } from 'sources';

class UserForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    email: ''
  }

  changeValue = field => ({ target }) =>
    this.setState({ [field]: target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const { updateUsersList } = this.props;

    createUser(this.state)
      .then(() => {
        updateUsersList();
      })
      .catch(showError);
  }

  render = () => {
    const { changeValue } = this;

    return (
      <div className="user-form-container">
        <form className="user-form user-form-container__user-form" onSubmit={this.onSubmit}>
          <div className="user-form__control-blocks">
            <p className="user-form__title">Добавление пользователя</p>
            <label className="user-form__labels-item">
              Имя:
              <input className="user-form__input" type="text" onChange={changeValue('firstName')} />
            </label>
            <label className="user-form__labels-item">
              Фамилия:
              <input className="user-form__input" type="text" onChange={changeValue('secondName')} />
            </label>
            <label className="user-form__labels-item">
              Email:
              <input className="user-form__input" type="email" onChange={changeValue('email')} />
            </label>
            <button className="user-form__button">Сохранить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
