import React, { Component } from "react";
import classes from "./AboutUs.module.css";
import Layout from "../../hoc/Layout";
import MainNavigation from "../Navigation/MainNavigation/MainNavigation";

class AboutUs extends Component {
  render() {
    return (
      <Layout>
        <div className={classes.container}>
          <MainNavigation />
          <h1>About us</h1>
          <p className={classes.subtitle}>
            The Lagunitas Brewing Company began on a kitchen stove in Northern
            California in 1993 and has been crafting hop-forward beers ever
            since. Welcoming the open-minded with open taps and simple truths:
            Beer Speaks (for itself), Life Is Uncertain (dont sip), and Its Good
            To Have Friends.
          </p>
        </div>
      </Layout>
    );
  }
}

export default AboutUs;
