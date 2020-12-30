import React, { useEffect } from "react";
import { useDataLayerValue } from "../../ContextAPI/datalayer";
import "./Table.css";

function Table() {
  const [{ activeCensor }, dispatch] = useDataLayerValue();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Alert ID</th>
          <th>Alert Message</th>
          <th>Date and Time</th>
        </tr>
      </thead>
      <tbody>
        {activeCensor?.alertDatas.map((alert) => {
          return (
            <tr key={alert.alertId}>
              <td>{alert.alertId}</td>
              <td>{alert.aMessage}</td>
              <td>{alert.timestamp}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
