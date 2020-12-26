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
      {censors.map((censor) => (
        <Censor key={censor.id} title={censor.title} />
      ))}
    </div>
  );
}

export default Navbar;
