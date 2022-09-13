import React, { useState } from "react";
// Mui Component
import { ButtonGroup, Paper } from "@mui/material";
// SVG Icon
import CoinIcon from "../../svg/icons/CoinIcon";
import DiamondIcon from "../../svg/icons/DiamondIcon";
import ThunderIcon from "../../svg/icons/ThunderIcon";
// Custom Components
import CustomMuiButton from "../custom-button/CustomMuiButton";

import { busCategoryContainer, buttonCategoryGroup, backgroundOverlay } from "./bus_category.module.scss";

const BusCategory = () => {
  const [active, setActive] = useState([false, false, false, false]);

  const handleOnClick = (index) => {
    setActive((prev) => {
      let temp = [false, false, false, false];
      temp[index] = true;
      prev = temp;
      return prev;
    });
  };

  return (
    <Paper className={busCategoryContainer} elevation={1}>
      <ButtonGroup className={buttonCategoryGroup}>
        <CustomMuiButton
          onClick={() => handleOnClick(0)}
          active={active[0]}
          svgIcon={<DiamondIcon />}
          text="Earliest Buses"
        />

        <CustomMuiButton
          onClick={() => handleOnClick(1)}
          active={active[1]}
          svgIcon={<CoinIcon />}
          text="Cheapest Buses"
        />
        <CustomMuiButton
          onClick={() => handleOnClick(2)}
          active={active[2]}
          svgIcon={<ThunderIcon />}
          text="Available Seats"
        />
        <CustomMuiButton
          onClick={() => handleOnClick(3)}
          active={active[3]}
          svgIcon={<ThunderIcon />}
          text="Fastest Trips"
        />
      </ButtonGroup>
    </Paper>
  );
};

export default BusCategory;
