import React, { useState } from "react";
// Mui Component
import { Checkbox, Paper, Slider } from "@mui/material";

// Styles
import {
  sidebar,
  sidebarOpen,
  sidebarClose,
  separator,
  filterIconContainer,
  openMenu,
  priceRangeContainer,
  priceRangeTitleContainer,
  checkboxContainer,
  scheduleContainer,
  scheduleTimeContainer,
} from "./sidebar.module.scss";
import FilterContainer from "../shared/filter-container/FilterContainer";

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minMax, setMinMax] = useState([500, 3213]);

  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  // Range Slider Functionality
  const priceRangeOnChange = (e, newValue) => {
    const minimum = 500;
    const maximum = 3213;
    const difference = maximum - minimum;
    const percentage = difference / 100;
    let rangeMin,
      rangeMax = 0;

    rangeMin = Math.ceil(minimum + newValue[0] * percentage);
    rangeMax = Math.ceil(minimum + newValue[1] * percentage);

    setPriceRange(newValue);
    setMinMax([rangeMin, rangeMax]);
  };

  // Open Filter Menu
  const openFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  return (
    <>
      <Paper className={`${sidebar} ${filterMenuOpen ? sidebarOpen : sidebarClose}`} elevation={1}>
        <div onClick={openFilterMenu} className={`${filterIconContainer} ${filterMenuOpen ? openMenu : ""}`}>
          <h2>Filter</h2>
          <span></span>
        </div>

        <div className={``}>
          <FilterContainer heading="Sort & Filter" />
          <div className={separator}></div>
          <FilterContainer filterCategory="Price Range">
            <div className={priceRangeContainer}>
              <div className={priceRangeTitleContainer}>
                <h6>Minimum Price</h6>
                <h6>Maximum Price</h6>
              </div>
              <div className={priceRangeTitleContainer}>
                <h4>{minMax[0]}</h4>
                <h4>{minMax[1]}</h4>
              </div>
              <Slider size="small" value={priceRange} onChange={priceRangeOnChange} />
            </div>
          </FilterContainer>
          <FilterContainer filterCategory="Class">
            <div className={checkboxContainer}>
              <Checkbox color="primary" size="large" />
              <h5>AC (40)</h5>
            </div>
            <div className={checkboxContainer}>
              <Checkbox size="large" />
              <h5>Non AC (24)</h5>
            </div>
          </FilterContainer>
          <FilterContainer filterCategory="Schedule">
            <div className={scheduleContainer}>
              <h5>Departure Time</h5>
              <Paper className={scheduleTimeContainer} variant="outlined">
                <Checkbox size="large" />
                <h4>00:00 - 05:59</h4>
              </Paper>
              <Paper className={scheduleTimeContainer} variant="outlined">
                <Checkbox size="large" />
                <h4>06:00 - 11:59</h4>
              </Paper>
              <Paper className={scheduleTimeContainer} variant="outlined">
                <Checkbox size="large" />
                <h4>12:00 - 17:59</h4>
              </Paper>
              <Paper className={scheduleTimeContainer} variant="outlined">
                <Checkbox size="large" />
                <h4>18:00 - 23:59</h4>
              </Paper>
            </div>
          </FilterContainer>
        </div>
      </Paper>
    </>
  );
};

export default Sidebar;
