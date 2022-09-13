import React from "react";
import BusInfo from "../src/components/bus-info/BusInfo";
import BusPageBody from "../src/components/bus-page-body/BusPageBody";
import Navbar from "../src/components/layout/Navbar/Navbar";
import Sidebar from "../src/components/sidebar/Sidebar";

const Bus = () => {
  return (
    <>
      <Navbar />
      <BusPageBody />
    </>
  );
};

export default Bus;
