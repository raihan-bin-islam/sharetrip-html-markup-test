import React from "react";
//Mui Component
import { Button } from "@mui/material";

//Styles
import { button, buttonActive, buttonSvg, backdrop } from "./custom_mui_button.module.scss";

const CustomMuiButton = ({ svgIcon, text, onClick, active }) => {
  return (
    <Button onClick={onClick} variant="text" className={`${button} ${active ? buttonActive : ""}`} key="one">
      <div className={buttonSvg}>{svgIcon}</div>
      <p>{text}</p>
    </Button>
  );
};

export default CustomMuiButton;
