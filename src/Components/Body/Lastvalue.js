import React from "react";
import "./Lastvalue.css";

function Lastvalue(props) {
  return (
    <div className="lastvalue">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fscience-thermometer_71296&psig=AOvVaw19_EMubOc3Cs_SeSWHmrp8&ust=1608384799912000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCNq7fS1-0CFQAAAAAdAAAAABAD"
        alt="thermometer"
      />
      <div className="lastvalue_details">
        <h2>Outdoor Temperature</h2>
        <h3>16 Seconds Ago</h3>
      </div>
      <h2 className="value">49.7 F</h2>
    </div>
  );
}

export default Lastvalue;
