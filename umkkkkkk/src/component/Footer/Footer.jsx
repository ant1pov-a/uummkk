import React, { Component } from "react";
import classes from "./Footer.module.css";
import CompactNavigation from "../Navigation/CompactNavigation/CompactNavigation";
import FormRegistration from "../../Form/FormRegistration/FormRegistration";
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
            {/* SocialLinks */}
          </div>
          <FormRegistration />
        </div>
      </footer>
    );
  }
}

export default Footer;
