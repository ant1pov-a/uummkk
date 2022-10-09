import React, { Component } from "react";
import classes from "./Footer.module.css";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section className={classes.Footer}>
        <h1>Hello Footer</h1>
      </section>
    );
  }
}

export default Footer;
