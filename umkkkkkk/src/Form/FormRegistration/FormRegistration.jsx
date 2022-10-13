import React, { Component } from "react";
import classes from "./FormRegistration.module.css";
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
        <button type="submit" className={classes.button}>
          Sign Up
        </button>
      </form>
    );
  }
}

export default FormRegistration;
