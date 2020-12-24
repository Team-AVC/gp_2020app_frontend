import React, { useRef } from "react";
import CanvasJSReact from "../../Assets/canvasjs.react";
import "./Chart.css";
import { useDataLayerValue } from "../../ContextAPI/datalayer";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart() {
  const [{ censordata, activecensor }, dispatch] = useDataLayerValue();
  const chart = useRef(null);

  var datapoints = censordata.lastreadings.map((reading) => {
    return {
      x: reading?.time,
      y: reading?.value,
    };
  });

  const options = {
    data: [
      {
        type: "line",
        dataPoints: datapoints,
      },
    ],
    axisY: {
      title: activecensor,
    },
    axisX: {
      title: "Time of the Reading( h )",
    },
  };

  return (
    <div className="chart">
      <CanvasJSChart options={options} ref={chart} />
    </div>
  );
}

export default Chart;
