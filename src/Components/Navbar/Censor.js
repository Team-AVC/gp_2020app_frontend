import React from "react";
import { useDataLayerValue } from "../../ContextAPI/datalayer";
import "./Censor.css";

function Censor({ title, id }) {
  const [{ censors, activeCensorid }, dispatch] = useDataLayerValue();

  const handleClick = () => {
    dispatch({
      type: "SET_ACTIVECENSORID",
      value: id,
    });

    censors?.map((censor) => {
      if (id === censor.sensorId) {
        console.log(censor);
        dispatch({
          type: "SET_ACTIVECENSOR",
          value: censor,
        });
      }
    });
  };

  return (
    <div className="censor" onClick={() => handleClick()}>
      <h2>{title}</h2>
    </div>
  );
}

export default Censor;

