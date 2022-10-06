import React, { Component } from "react";
import BestOffer from "./BestOffer/BestOffer";
import Cities from "./Cities/Cities";

import classes from "./MainPage.module.css";
import MainNavigation from "../../component/Navigation/MainNavigation/MainNavigation";

class MainPage extends Component {
  render() {
    return (
      <div className={classes.MainPage}>
        <MainNavigation />
        <h1>Main screen here</h1>

        <BestOffer />
        <Cities />
      </div>
    );
  }
}

export default MainPage;
