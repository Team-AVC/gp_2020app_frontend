import React from "react";
import { useDataLayerValue } from "../../Context API/datalayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import "./Lastvalue.css";

function Lastvalue() {
  const [{ lastreading, activecensor }, dispatch] = useDataLayerValue();

  return (
    <div className="lastvalue">
      <FontAwesomeIcon icon={faThermometerHalf} size="30px" />
      <div className="lastvalue_details">
        <h2>Outdoor {activecensor}</h2>
        <h3>{lastreading.time} Seconds Ago</h3>
      </div>
      <h2 className="value">{lastreading.value} F</h2>
    </div>
  );
}

export default Lastvalue;
