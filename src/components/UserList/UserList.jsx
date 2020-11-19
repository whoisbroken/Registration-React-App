import React from 'react';
import "./UserList.scss";

const UserList = ({ users }) => {
  return (
    <ul className="User_List">
      {users.map((user, idx) => {
        return (
          <li className="User_Item" key={idx + user.userName}>
            <h3 className="User_Title">User {idx + 1}</h3>
            <p className="User_Text">Name: {user.userName}</p>
            <p className="User_Text">Gender: {user.userGender}</p>
            {user.userCreditCard ?
              <p className="User_Text">Credit card: {user.userCreditCard}</p> : null} 
            {user.withLoyalty ?
              <p className="User_Text">Loyalty: yes</p> : null}
            {user.userCoupon ?
              <p className="User_Text">Coupon: {user.userCoupon}</p> : null}
            <p className="User_Text">date added: {user.dateAdded}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default UserList;