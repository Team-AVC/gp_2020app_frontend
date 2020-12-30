import React, { useState } from "react";
import { useDataLayerValue } from "../../ContextAPI/datalayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import msToTime from "./OtherFiles/timedifference";
import "./Lastvalue.css";

function Lastvalue() {
  const [{ activeCensor }, dispatch] = useDataLayerValue();

  var lastreading =
    activeCensor?.sensorDatas[activeCensor?.sensorDatas?.length - 1];

  var timedifference = msToTime(new Date() - new Date(lastreading?.timestamp));

  return (
    <div className="lastvalue">
      <FontAwesomeIcon icon={faThermometerHalf} className="icon" />
      <div className="lastvalue_details">
        <h2>Outdoor {activeCensor?.sensorName}</h2>
        <h3>{timedifference}</h3>
      </div>
      <h2 className="value">
        {lastreading?.dataValue} &#176;{activeCensor?.symbol}
      </h2>
    </div>
  );
}

export default Lastvalue;
