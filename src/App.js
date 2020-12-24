import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import { useDataLayerValue } from "./Context API/datalayer";
import { useEffect } from "react";

function App() {
  const [{ activecensor }] = useDataLayerValue();

  useEffect(() => {
    console.log("Active censor changed");
  }, [activecensor]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navbar />
        {activecensor === null ? <h1> Select a Censor</h1> : <Body />}
      </div>
    </div>
  );
}

export default App;
