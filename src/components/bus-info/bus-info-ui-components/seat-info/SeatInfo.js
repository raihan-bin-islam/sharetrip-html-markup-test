import React, { useState } from "react";
// Mui Component
import { Button, ButtonGroup, Checkbox, Divider } from "@mui/material";
// SVG Icons
import SeatIcon from "../../../svg/icons/SeatIcon";
// Styles
import {
  container,
  primaryBtn,
  notSelected,
  seatTypeContainer,
  seatClass,
  checkboxContainer,
} from "./seat_info.module.scss";

const SeatInfo = () => {
  const [selected, setSelected] = useState([true, false]);

  return (
    <div className={container}>
      {/* Seat Info Button Groups */}
      <ButtonGroup>
        <Button
          className={selected[0] === true ? primaryBtn : notSelected}
          onClick={() => setSelected([true, false])}
          variant="outlined"
        >
          Seat Info
        </Button>
        <Button
          className={selected[1] ? primaryBtn : notSelected}
          onClick={() => setSelected([false, true])}
          variant="outlined"
        >
          Policy
        </Button>
      </ButtonGroup>
      {/* Seat Class and their prices container */}
      <div className={seatTypeContainer}>
        <div className={seatClass}>
          <SeatIcon color="g" />
          <p>B4</p>
          <p>B-Class</p>
        </div>
        <p>BDT 750</p>
      </div>
      <div className={seatTypeContainer}>
        <div className={seatClass}>
          <SeatIcon color="g" />
          <p>B4</p>
          <p>B-Class</p>
        </div>
        <p>BDT 750</p>
      </div>
      {/* Divider */}
      <Divider />
      {/* Charge */}
      <div className={seatTypeContainer}>
        <div className={seatClass}>
          <p>Charge :</p>
        </div>
        <p>BDT 50</p>
      </div>
      <div className={seatTypeContainer}>
        <div className={seatClass}>
          <p>Insurance :</p>
        </div>
        <p>BDT 20</p>
      </div>
      <Divider />
      {/* Sub Total */}
      <div className={seatTypeContainer}>
        <div className={seatClass}>
          <p>Sub Total :</p>
        </div>
        <h3>BDT 1,570</h3>
      </div>
      {/* Submission */}
      <div className={checkboxContainer}>
        <Checkbox color="primary" size="large" />
        <p>
          I want to avail <span>Insurance Service</span>
        </p>
      </div>
      <Button className={primaryBtn} variant="contained">
        Select & Continue to return
      </Button>
    </div>
  );
};

export default SeatInfo;
