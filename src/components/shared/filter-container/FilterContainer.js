import React from "react";
// Mui Components
import { Box, Button, Divider } from "@mui/material";
// Styles
import { filterContainer, content, button, pdTopBtm } from "./filter_container.module.scss";

const FilterContainer = ({ heading, filterCategory, children }) => {
  return (
    <div className={filterContainer}>
      <Box className={`${content} ${filterCategory ? pdTopBtm : ""}`}>
        {heading && (
          <>
            <h3>{heading}</h3>
            <Button className={button} variant="text">
              Reset
            </Button>
          </>
        )}
        {filterCategory && <h2>{filterCategory}</h2>}
      </Box>
      {filterCategory && <Divider />}
      {children}
    </div>
  );
};

export default FilterContainer;
