import React, { useState } from "react";
// Mui Component
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// Custom Component
import SeatAvailability from "../seat-availablity/SeatAvailability";
// Styles
import { container, selectForm, label, selectItem, seatAvailabilityContainer } from "./travel_point.module.scss";

const TravelPoint = () => {
  const [boardingPoint, setBoardingPoint] = useState("Kolabagan Counter");
  const [droppingPoint, setDroppingPoint] = useState("Dampara Counter");
  const handleChange1 = (e) => {};
  const handleChange2 = (e) => {};

  return (
    <div className={container}>
      <div className={selectForm}>
        <FormControl fullWidth size="small">
          <InputLabel className={label} id="boarding-label">
            Boarding Point
          </InputLabel>
          <Select
            className={selectItem}
            labelId="boarding-label"
            value={boardingPoint}
            label="Boarding Point"
            onChange={handleChange1}
          >
            <MenuItem value={boardingPoint}>{boardingPoint}</MenuItem>
            <MenuItem value={droppingPoint}>{droppingPoint}</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel className={label} id="dropping-label">
            Dropping Point
          </InputLabel>
          <Select
            className={selectItem}
            labelId="dropping-label"
            value={droppingPoint}
            label="dropping Point"
            onChange={handleChange2}
          >
            <MenuItem value={droppingPoint}>{droppingPoint}</MenuItem>
            <MenuItem value={boardingPoint}>{boardingPoint}</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={seatAvailabilityContainer}>
        <SeatAvailability color="r" text="3 Sold Out" />
        <SeatAvailability text="2 Booked" />
        <SeatAvailability color="b" text="2 Selected" />
        <SeatAvailability color="g" text="14 Available" />
        <SeatAvailability text="20 Blocked" notAvailable />
      </div>
    </div>
  );
};

export default TravelPoint;
