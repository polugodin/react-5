import React, { Component } from 'react';

import { getUsers, deleteUser, putUser, showError } from 'sources';

import UserList from './UserList';
import UserForm from './UserForm';

class App extends Component {
  state = {
    users: []
  }

  updateUsersList = () => {
    getUsers()
      .then(({ data }) => this.setState({ users: data }))
      .catch(showError);
  };

  deleteUser = id => {
    deleteUser(id)
      .then(() => {
        this.updateUsersList();
      })
      .catch(showError);
  };

  putUser = user => {
    putUser(user)
      .then(() => {
        this.updateUsersList();
      })
      .catch(showError);
  };

  componentDidMount = () => {
    this.updateUsersList();
  }

  render = () => {
    const { users } = this.state;
    const { deleteUser, putUser, updateUsersList } = this;
    
    return (<>
      <UserList users={users} deleteUser={deleteUser} putUser={putUser} />
      <UserForm updateUsersList={updateUsersList} />
    </>)
  }
}

export default App;