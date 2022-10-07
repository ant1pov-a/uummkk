import React, { Component } from "react";
import BestOffer from "./BestOffer/BestOffer";
import Cities from "./Cities/Cities";

import classes from "./MainPage.module.css";
import MainNavigation from "../../component/Navigation/MainNavigation/MainNavigation";
import Layout from "../../hoc/Layout";

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <div className={classes.container}>
          <MainNavigation />
          <BestOffer />
          <Cities />
        </div>
      </Layout>
    );
  }
}

export default MainPage;
