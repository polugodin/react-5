import React, { Component } from 'react';

class User extends Component {
  state = {
    editing: false,
    firstName: this.props.user.firstName,
    secondName: this.props.user.secondName,
    email: this.props.user.email
  };

  openEditing = () => this.setState({ editing: true });

  closeEditing = () => {
    const { firstName, secondName, email } = this.props.user;
    this.setState({
      editing: false,
      firstName: firstName,
      secondName: secondName,
      email: email
    });
  }

  submitPutUser = (e) => {
    e.preventDefault();

    this.setState({
      editing: false
    });

    const { firstName, secondName, email } = this.state;
    const user = { id: this.props.user.id };
    if (firstName !== this.props.user.firstName) user.firstName = firstName;
    if (secondName !== this.props.user.secondName) user.secondName = secondName;
    if (email !== this.props.user.email) user.email = email;
    if (Object.keys(user).length === 1) return;

    this.props.putUser(user);
  }

  changeValue = field => ({ target }) =>
    this.setState({ [field]: target.value });

  componentDidUpdate = (prevProps) => {
    const { firstName, secondName, email } = this.props.user;
    if (firstName !== prevProps.user.firstName
      || secondName !== prevProps.user.secondName
      || email !== prevProps.user.email) {
      this.setState({
        editing: false,
        firstName: firstName,
        secondName: secondName,
        email: email
      });
    }
  }

  render() {
    const { user, deleteUser } = this.props;
    const { editing, firstName, secondName, email } = this.state;
    const { changeValue, closeEditing, submitPutUser, openEditing } = this;
    
    return (
      <li className="users__user-container">
        <div className="user users__user-container__user">
          <div className="user__data-current">
            <p className="user__data-item">{`Имя: ${user.firstName}`}</p>
            <p className="user__data-item">{`Фамилия: ${user.secondName}`}</p>
            <p className="user__data-item">{`Email: ${user.email}`}</p>
            <button className="user__button" onClick={() => {deleteUser(user.id)}}>Удалить</button>
            <button className="user__button" onClick={openEditing}>Изменить</button>
          </div>
          
          {editing && (
          <form className="user__data-editing" onSubmit={submitPutUser}>
            <p className="user__data-item"><label>Имя:
              <input className="user__data-input" type="text" value={firstName} onChange={changeValue('firstName')} />
            </label></p>

            <p className="user__data-item"><label>Фамилия:
              <input className="user__data-input" type="text" value={secondName} onChange={changeValue('secondName')} />
            </label></p>

            <p className="user__data-item"><label>Email:
              <input className="user__data-input" type="email" value={email} onChange={changeValue('email')} />
            </label></p>

            <button className="user__button" type="submit">Сохранить</button>
            <button className="user__button" type="button" onClick={closeEditing}>Отмена</button>
          </form>
          )}
        </div>
        
      </li>
    )
  }
}

export default User;