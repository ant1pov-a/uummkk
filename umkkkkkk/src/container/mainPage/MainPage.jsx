import React, { Component } from "react";
import BestOffer from "../../component/BestOffer/BestOffer";
import Cities from "../../component/Cities/Cities";

import classes from "./MainPage.module.css";
import MainNavigation from "../../component/Navigation/MainNavigation/MainNavigation";
import Layout from "../../hoc/Layout";
import Footer from "../../component/Footer/Footer";
import MainScreen from "../../component/MainScreen/MainScreen";

class MainPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className={classes.container}>
            <MainNavigation />
            <MainScreen />
            <BestOffer />
            <Cities />
          </div>
          <Footer />
        </Layout>
      </>
    );
  }
}

export default MainPage;
