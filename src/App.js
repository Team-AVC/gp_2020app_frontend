import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import { useDataLayerValue } from "./ContextAPI/datalayer";
import { useEffect, useState } from "react";

function App() {
  var censorurl = "http://localhost:8081/port/sensor";
  var updateInterval = 1000;

  const [{ activeCensor, censors }, dispatch] = useDataLayerValue();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setInterval(updateData, updateInterval);
  }, []);

  async function updateData() {
    const response = await fetch(censorurl);
    const reponsedata = await response.json();

    setIsLoading(false);
    dispatch({
      type: "SET_CENSORS",
      value: reponsedata,
    });
  }

  useEffect(() => {
    censors.map((censor) => {
      if (censor.sensorId === activeCensor.sensorId) {
        dispatch({
          type: "SET_ACTIVECENSOR",
          value: censor,
        });
      }
    });
  }, [censors]);

  return (
    <div className="App">
      {isLoading ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <div className="fcontainer">
          <Header />
          <div className="container">
            <Navbar />
            {activeCensor.sensorId === undefined ? (
              <h1 className="select"> Select a Censor</h1>
            ) : (
              <Body />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
