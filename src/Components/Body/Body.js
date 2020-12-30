import React, { useState } from "react";
import "./Body.css";
import Lastvalue from "./Lastvalue";
import Chart from "./Chart";
import Table from "./Table";

function Body() {
  const [isAlerts, setAlerts] = useState(false);
  const [isReadings, setReadings] = useState(true);

  const handleClick = (e) => {
    if (e.target.id === "readings") {
      setAlerts(false);
      setReadings(true);
    } else {
      setAlerts(true);
      setReadings(false);
    }
  };

  return (
    <div className="body">
      <Lastvalue />
      <div className="selection">
        <div className="option">
          Past Censor Readings
          <input
            type="radio"
            checked={isReadings}
            id="readings"
            onChange={(e) => {
              handleClick(e);
            }}
          ></input>
        </div>
        <div className="option">
          Past Alerts
          <input
            type="radio"
            id="alerts"
            checked={isAlerts}
            onChange={(e) => {
              handleClick(e);
            }}
          ></input>
        </div>
      </div>
      {isReadings ? <Chart /> : <Table />}
    </div>
  );
}

export default Body;
