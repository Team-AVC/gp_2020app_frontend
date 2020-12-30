import React, { useRef, useState } from "react";
import CanvasJSReact from "../../Assets/canvasjs.react";
import "./Chart.css";
import { useDataLayerValue } from "../../ContextAPI/datalayer";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart() {
  const [{ activeCensor }, dispatch] = useDataLayerValue();
  const chart = useRef(null);

  var datapoints = activeCensor?.sensorDatas.map((data) => {
    return {
      x: new Date(data?.timestamp),
      y: data?.dataValue,
    };
  });

  const options = {
    legend: {
      horizontalAlign: "center",
      verticalAlign: "top",
      fontSize: 20,
    },
    data: [
      {
        type: "line",
        showInLegend: true,
        legendText: activeCensor?.sensorName,
        dataPoints: datapoints,
      },
    ],
    axisY: {
      title: "( °" + activeCensor.symbol + " )",
    },
    axisX: {
      title: "Time of the Reading",
    },
  };

  return (
    <div className="chart">
      <CanvasJSChart options={options} ref={chart} />
    </div>
  );
}

export default Chart;
