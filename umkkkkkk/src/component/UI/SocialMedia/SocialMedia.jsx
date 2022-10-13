import React, { Component } from "react";
import classes from "./SocialMedia.module.css";
import facebook from "./../../../img/facebook.png";
import twitter from "./../../../img/twitter.png";
import instagram from "./../../../img/instagram.png";

class SocialMedia extends Component {
  render() {
    return (
      <ul className={classes.SocialMedia}>
        <li className={classes.item}>
          <a className={classes.link} href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
      </ul>
    );
  }
}

export default SocialMedia;
