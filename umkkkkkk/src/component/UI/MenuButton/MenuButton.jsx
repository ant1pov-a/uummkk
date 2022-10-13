import React, { Component } from "react";
import classes from "./MenuButton.module.css";
import burger from "../../../img/burger.png";

const MenuButton = (props) => {
  return (
    <div className={classes.MenuButton}></div>
    // <a href="#" className={classes.MenuButton}>
    //   <img src={burger} alt="" />
    // </a>
  );
};

export default MenuButton;
