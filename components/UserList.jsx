import React, { Component } from 'react';

import User from './User';

class UsersList extends Component {

  render() {
    const { users, deleteUser, putUser } = this.props;

    return (
      <ul className="users">
        {users.length !== 0 ? (
            users.map((user) => <User key={user.id} user={user} deleteUser={deleteUser} putUser={putUser} /> )
        ) : (
          <h4>Нет данных</h4>
        )}
      </ul>
    )
  }
}

export default UsersList;