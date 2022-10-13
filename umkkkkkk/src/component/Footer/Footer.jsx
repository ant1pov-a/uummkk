import React, { Component } from "react";
import classes from "./Footer.module.css";
import CompactNavigation from "../Navigation/CompactNavigation/CompactNavigation";
import FormRegistration from "../../Form/FormRegistration/FormRegistration";
import SocialMedia from "../UI/SocialMedia/SocialMedia";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <footer className={classes.Footer}>
        <div className={classes.wrapper}>
          <div className={classes.menu}>
            <CompactNavigation />
            <SocialMedia />
          </div>
          <FormRegistration />
        </div>
      </footer>
    );
  }
}

export default Footer;
