import React, { Component } from "react";
import BestOffer from "./BestOffer/BestOffer";
import Cities from "./Cities/Cities";

import classes from "./MainPage.module.css";
import MainNavigation from "../../component/Navigation/MainNavigation/MainNavigation";
import Layout from "../../hoc/Layout";
import Footer from "../../component/Footer/Footer";

class MainPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className={classes.container}>
            <MainNavigation />
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
