import React from "react";
import "./Navbar.css";
import Censor from "./Censor";
import { useDataLayerValue } from "../../ContextAPI/datalayer";

function Navbar() {
  const [{ censors }, dispatch] = useDataLayerValue();

  return (
    <div className="navbar">
      <h1>Censors</h1>
      <hr />
      {censors.map((censor) => {
        return (
          <Censor
            title={censor.sensorName}
            key={censor.sensorId}
            id={censor.sensorId}
          />
        );
      })}
    </div>
  );
}

export default Navbar;
