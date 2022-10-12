import React, { Component } from "react";
import classes from "./CompactNavigation.module.css";

class CompactNavigation extends Component {
  render() {
    return (
      <ul className={classes.CompactNavigation}>
        <li className={classes.item}>
          <a className={classes.link} href="">
            About us
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="">
            Home
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="">
            Catalog
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="">
            Partners
          </a>
        </li>
      </ul>
    );
  }
}

export default CompactNavigation;
