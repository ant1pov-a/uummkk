import React, { Component } from "react";
import BestOffer from "./BestOffer/BestOffer";
import Cities from "./Cities/Cities";

import classes from "./MainPage.module.css";

class MainPage extends Component {
  render() {
    return (
      <div className={classes.MainPage}>
        <h1>Main screen here</h1>

        <BestOffer />
        <Cities />
      </div>
    );
  }
}

export default MainPage;
