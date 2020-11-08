import React, { Component } from 'react';
import "./Registration.scss";
import {Button,
Checkbox,
TextField,
FormControlLabel} from '@material-ui/core';

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
    this.state.userName ? this.props.addUser(this.state) : this.setState(userData);
    console.log(this.state)
  }

  render() {
    return (
      <>
        <div className="Registration">
          <TextField
            required
            className="Registration_Input"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
            label="Name" />
          <TextField
            className="Registration_Input"
            type="text"
            name="userGender"
            value={this.state.userGender}
            onChange={this.handleChange}
            label="Gender"
          />
          <TextField
            className="Registration_Input"
            type="text"
            name="userCreditCard"
            value={this.state.userCreditCard}
            onChange={this.handleChange}
            label="Credit Card"
          />
          <FormControlLabel
            value="top"
            control={<Checkbox
              className="Registration_Input"
              type="checkbox"
              name="withLoyalty"
              value={this.state.withLoyalty}
              onChange={this.handleChange}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }} />}
            label="Loyalty"
            labelPlacement="top"
          />
          {this.state.withLoyalty ?
            <TextField
              className="Registration_Input"
              type="text"
              name="userCoupon"
              value={this.state.userCoupon}
              onChange={this.handleChange}
              label="Loyalty"
            /> : null}

          <Button
            className="Registration_Btn"
            onClick={this.handleSubmit}
            variant="outlined"
            size="medium"
            color="primary"
          >Send</Button>
        </div>
      </>
    );
  }
}

export default Registration;