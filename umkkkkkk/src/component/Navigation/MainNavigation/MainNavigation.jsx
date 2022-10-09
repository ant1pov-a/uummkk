import React, { Component } from "react";
import classes from "./MainNavigation.module.css";
import MenuButton from "../../UI/MenuButton/MenuButton";
import Button from "../../UI/Button/Button";

class MainNavigation extends Component {
  render() {
    return (
      <div className={classes.MainNavigation}>
        <div className={classes.navigation__wrapper}>
          <div className={classes.navigation__inner}>
            <MenuButton />
            <h1 className={classes.logo}>Umkgroupp</h1>
            <Button text="Buy it Now" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainNavigation;
