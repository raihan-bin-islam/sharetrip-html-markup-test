import React from "react";
// Mui Component
import { Paper } from "@mui/material";
// Custom Components
import BusCategory from "../shared/bus-category/BusCategory";
import FromTo from "./bus-info-ui-components/from-to/FromTo";
import PriceContainer from "./bus-info-ui-components/price-container/PriceContainer";
import SeatInfo from "./bus-info-ui-components/seat-info/SeatInfo";
import TravelPoint from "./bus-info-ui-components/travel-point/TravelPoint";

// Styles
import { container, busInfoGrid, gridChild } from "./bus _info.module.scss";

const BusInfo = () => {
  return (
    <Paper className={busInfoGrid} elevation={1}>
      <div className={gridChild}>
        <FromTo />
      </div>
      <div className={gridChild}>
        <PriceContainer />
      </div>
      <div className={gridChild}>
        <TravelPoint />
      </div>
      <div className={gridChild}>
        <SeatInfo />
      </div>
    </Paper>
  );
};

export default BusInfo;
