import React, { Component } from "react";
import classes from "./FormRegistration.module.css";
import Button from "../../component/UI/Button/Button";
class FormRegistration extends Component {
  render() {
    return (
      <form className={classes.FormRegistration}>
        <p className={classes.text}>Sing up for feetback</p>
        <input
          placeholder="Your Name"
          type="text"
          className={classes.input}
          action=""
        ></input>
        <input
          placeholder="Your Number"
          type="number"
          className={classes.input}
          action=""
        ></input>
        <input
          placeholder="Your Email"
          type="email"
          className={classes.input}
          action=""
        ></input>
        <Button className={classes.send} text="Sign Up" />
      </form>
    );
  }
}

export default FormRegistration;
