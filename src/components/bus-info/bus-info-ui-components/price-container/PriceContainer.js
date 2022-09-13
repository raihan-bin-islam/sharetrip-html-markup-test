import React from "react";
// Mui Component
import { Button } from "@mui/material";
// Styles
import { container, linkContainer, button } from "./price_container.module.scss";

const PriceContainer = () => {
  return (
    <div className={container}>
      <div>
        <p>Per Person</p>
        <h2>BDT 750</h2>
        <h4>BDT 775</h4>
      </div>
      <div className={linkContainer}>
        <Button className={button} variant="contained">
          View Details
        </Button>
        <a href="#">Cancellation Policy</a>
      </div>
    </div>
  );
};

export default PriceContainer;
