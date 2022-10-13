import React, { Component } from "react";
import Button from "../UI/Button/Button";
import classes from "./MainScreen.module.css";
import pegg1491 from "../../img/pegg1491.png";

class MainScreen extends Component {
  render() {
    return (
      <div className={classes.MainScreen}>
        <img className={classes.mainImg} src={pegg1491} alt="" />
        <div className={classes.mainText}>
          <h1 className={classes.title}>УЗНАЙТЕ ВКУС НАСТОЯЩЕГО ПИВА</h1>
          <p className={classes.subtitle}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore sunt in culpa qui officia deserunt mollit anim id
            est laborum."
          </p>
          <a className={classes.catalogLink}>Catalog</a>
        </div>
      </div>
    );
  }
}

export default MainScreen;
