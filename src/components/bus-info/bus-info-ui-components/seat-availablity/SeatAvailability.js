import React from "react";
// SVG Icons
import SeatIconBlocked from "../../../svg/icons/SeatIconBlocked";
import SeatIcon from "../../../svg/icons/SeatIcon";
// Styles
import { container, red, green, blue, orange } from "./seat_availability.module.scss";

const SeatAvailability = ({ color, text, notAvailable }) => {
  return (
    <div className={`${container} ${color === "r" ? red : color === "g" ? green : color === "b" ? blue : orange}`}>
      {!notAvailable && <SeatIcon />}
      {notAvailable && <SeatIconBlocked />}
      <h4>{text}</h4>
    </div>
  );
};

export default SeatAvailability;
