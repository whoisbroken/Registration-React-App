import React, { Component } from 'react';
import "./Registration.scss";
import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import InputMask from "react-input-mask";

const userData = {
  userName: "",
  userGender: "",
  userCreditCard: "",
  withLoyalty: false,
  userCoupon: "",
  dateAdded: new Date()
}

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={inputRef}
      mask={"9999 9999 9999 9999"}
    />
  );
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
    this.props.addUser({ ...this.state, dateAdded: new Date() });
    this.setState(userData);
  }

  render() {
    return (
      <div>
        <form className="Registration">
          <TextField
            required={true}
            className="Registration_Input"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
            label="Name" />
          <InputLabel>Gender</InputLabel>
          <select
            className="Registration_Input"
            id="demo-simple-select"
            value={this.state.userGender}
            onChange={this.handleChange}
            name="userGender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <TextField
            className="Registration_Input"
            value={this.state.userCreditCard}
            onChange={this.handleChange}
            type="text"
            name="userCreditCard"
            label="Credit Card"
            InputProps={{
              inputComponent: TextMaskCustom
            }}
          >
          </TextField>
          <FormControlLabel
            value="top"
            label="Loyalty"
            labelPlacement="end"
            control={<Checkbox
              className="Registration_Input"
              type="checkbox"
              name="withLoyalty"
              value={this.state.withLoyalty}
              onChange={this.handleChange}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }} />}
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
            color="primary"
          >Send</Button>
        </form>
      </div>
    );
  }
}

export default Registration;