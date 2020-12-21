import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function Chart() {
  const [chartData, setChartData] = useState({
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
    ],
    datasets: [
      {
        label: "Population",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
      },
    ],
  });

  return (
    <div>
      <Line data={chartData} height="350" width="600" />
    </div>
  );
}

export default Chart;
