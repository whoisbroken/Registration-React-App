import React, { Component } from 'react';
import "./Registration.scss";
import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Snackbar
} from '@material-ui/core';
import { Alert } from "@material-ui/lab"

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
    this.state = {
      ...userData,
      showSuccessAlert: false,
      showErrorAlert: false
    };

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

    if (this.handleValidation()) {

      this.props.addUser({ ...this.state, dateAdded: new Date().toString().slice(4, 24) });
      this.setState({
        userData,
        showSuccessAlert: true
      })
    } else {
      this.setState({
        showErrorAlert: true
      })
    }

  }

  handleValidation() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields.userName) {
      formIsValid = false;
      errors["userName"] = "Cannot be empty";
    }

    //only letters
    if (typeof fields.userName !== "undefined") {
      if (!fields.userName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
      }
    }

    return formIsValid;
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      showSuccessAlert: false,
      showErrorAlert: false
    })
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
            label="Name"
          />
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            className="Registration_Input"
            id="demo-simple-select"
            value={this.state.userGender}
            onChange={this.handleChange}
            name="userGender"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
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
              InputProps={{
                inputComponent: TextMaskCustom
              }}
            /> : null}

          <Button
            className="Registration_Btn"
            onClick={this.handleSubmit}
            variant="outlined"
            color="primary"
          >Send</Button>
        </form>
        <Snackbar open={this.state.showSuccessAlert} autoHideDuration={4000} onClose={this.handleClose}>
          <Alert
            variant="outlined"
            severity="success"
            onClose={this.handleClose}
          >
            User added!
        </Alert>
        </Snackbar>
        <Snackbar open={this.state.showErrorAlert} autoHideDuration={4000} onClose={this.handleClose}>
          <Alert
            variant="outlined"
            severity="error"
            onClose={this.handleClose}
          >
            Something went wrong!
        </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default Registration;