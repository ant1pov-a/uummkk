import React, { Component } from "react";
import classes from "./BestOffer.module.css";
import beerImg1 from "../../../img/beerImg1.png";
import beerImg2 from "../../../img/beerImg2.png";
import beerImg3 from "../../../img/beerImg3.png";
import beerImg4 from "../../../img/beerImg4.png";
import beerImg5 from "../../../img/beerImg5.png";
import beerImg6 from "../../../img/beerImg6.png";

class BestOffer extends Component {
  state = {
    offerItems: [
      {
        img: beerImg1,
        title: "OfferItem title",
        subtitle:
          "OfferItemSubtitleLorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolore",
      },
      {
        img: beerImg2,
        title: "OfferItem title",
        subtitle:
          "OfferItemSubtitleLorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolore",
      },
      {
        img: beerImg3,
        title: "OfferItem title",
        subtitle:
          "OfferItemSubtitleLorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolore",
      },
      {
        img: beerImg4,
        title: "OfferItem title",
        subtitle:
          "OfferItemSubtitleLorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolore",
      },
      {
        img: beerImg5,
        title: "OfferItem title",
        subtitle:
          "OfferItemSubtitleLorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolore",
      },
      {
        img: beerImg6,
        title: "OfferItem title",
        subtitle:
          "OfferItemSubtitleLorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolore",
      },
    ],
  };
  render() {
    return (
      <>
        <h1 className={classes.offer__title}>Best Offer</h1>
        <div className={classes.offers}>
          {this.state.offerItems.map((item) => {
            return (
              <div className={classes.offer__item}>
                <img src={item.img} alt="" />
                <h4 className={classes.offerItem__title}>{item.title}</h4>
                <p className={classes.offerItem__subtitle}>{item.subtitle}</p>
                <div>
                  <button className={classes.offerItem__buy}>buy it now</button>
                  <a className={classes.offerItem_details} href="#">
                    details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default BestOffer;
