import React from 'react';

const UserList = ({ users }) => {
    return (
      <ul>
        {users.map((user, idx) => {
          return (
          <li key={idx + user.userName}>
            <p>{user.userName}</p>
            <p>{user.userGender}</p>
            <p>{user.userCreditCard}</p>
            <p>{user.withLoyalty}</p>
            <p>{user.userCoupon}</p>
            <p>{user.dataAdded}</p>
          </li>
          )
        })}
      </ul>
    );
  }

export default UserList;