import React from "react";
// SVG Icons
import ArrowLeft from "../../../svg/icons/ArrowLeft";
import ArrowRight from "../../../svg/icons/ArrowRight";
import BusIcon from "../../../svg/icons/BusIcon";
import CoinIconYellow from "../../../svg/icons/CoinIconYellow";

// Styles
import {
  container,
  busInfoContainer,
  departureInfoContainer,
  departureTime,
  iconContainer,
} from "./from_to.module.scss";

const FromTo = () => {
  return (
    <div className={container}>
      {/* Bus Information Container */}
      <div className={busInfoContainer}>
        <h3>AC</h3>
        <span>
          <h2>Hanif Enterprize</h2>
          31-DHK-CTG(D)
        </span>
        <h3>
          <CoinIconYellow />
          55
        </h3>
      </div>
      {/* Departure Info */}
      <div className={departureInfoContainer}>
        {/* From */}
        <div className={departureTime}>
          <p>From</p>
          <h4>Dhaka</h4>
          <h4>11:30 PM</h4>
          <h5>Kolabagan Counter</h5>
          <p>22 June 2021</p>
        </div>
        {/* Bus Icon */}
        <div className={iconContainer}>
          <ArrowLeft />
          <BusIcon />
          <ArrowRight />
          <h5>16 Seats available</h5>
          <p>6h 00m</p>
        </div>
        {/* To */}
        <div className={departureTime}>
          <p>To</p>
          <h4>Chottogram</h4>
          <h4>05:30 AM</h4>
          <h5>Dampara Counter</h5>
          <p>23 June 2021</p>
        </div>
      </div>
    </div>
  );
};

export default FromTo;
