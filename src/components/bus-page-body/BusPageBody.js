import React from "react";
// Custom Components
import BusInfo from "../bus-info/BusInfo";
import BusCategory from "../shared/bus-category/BusCategory";
import Sidebar from "../sidebar/Sidebar";

// Styles
import { busPageSection, container } from "./bus_page_body.module.scss";

const BusPageBody = () => {
  return (
    <section className={busPageSection}>
      <Sidebar />
      <div className={container}>
        <h1>48 Available Buses</h1>
        <BusCategory />
        <BusInfo />
      </div>
    </section>
  );
};

export default BusPageBody;
