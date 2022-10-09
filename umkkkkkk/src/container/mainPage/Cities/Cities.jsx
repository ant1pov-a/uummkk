import React, { Component } from "react";
import classes from "./Cities.module.css";
import city1 from "../../../img/city1.png";
import city2 from "../../../img/city2.png";
import city3 from "../../../img/city3.png";

class Cities extends Component {
  state = {};
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.Cities__title}>
          Наше пиво вы можете встретить на полках Больших городов УКРАИНЫ
        </h1>
        <div className={classes.Cities}>
          <div className={classes.City__card}>
            <a href="#">
              <img className={classes.City__img} src={city1} alt="" />
              <p className={classes.City__name}>Kyiv</p>
            </a>
          </div>
          <div className={classes.City__card}>
            <a href="#">
              <img className={classes.City__img} src={city2} alt="" />
              <p className={classes.City__name}>Odesa</p>
            </a>
          </div>
          <div className={classes.City__card}>
            <a href="#">
              <img className={classes.City__img} src={city3} alt="" />
              <p className={classes.City__name}>Kharkiv</p>
            </a>
          </div>
        </div>
        {/* here btn component  */}
      </div>
    );
  }
}

export default Cities;
