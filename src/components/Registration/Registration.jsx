import React, { Component } from 'react';

const userData = {
  userName: "",
  userGender: "",
  userCreditCard: "",
  withLoyalty: false,
  userCoupon: "",
  dateAdded: new Date()
}

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { ...userData };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    this.props.addUser(this.state);
    this.setState(userData);
  }


  render() {
    return (
      <>
        <div>
          <label>
            User Name:
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange} />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="userGender"
              value={this.state.userGender}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Credit Card:
            <input
              type="text"
              name="userCreditCard"
              value={this.state.userCreditCard}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Loyalty programm:
            <input
              type="checkbox"
              name="withLoyalty"
              value={this.state.withLoyalty}
              onChange={this.handleChange} />
          </label>
          {this.state.withLoyalty ? 
            <label>
              Coupon:
              <input
                type="text"
                name="userCoupon"
                value={this.state.userCoupon}
                onChange={this.handleChange}
              />
            </label> : null } 
          
          <button onClick={this.handleSubmit}>Send</button>
        </div>
      </>
    );
  }
}

export default Registration;