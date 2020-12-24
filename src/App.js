import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import { useDataLayerValue } from "./ContextAPI/datalayer";
import { useEffect } from "react";
import { useFetch } from "./CustomHooks/useFetch";

function App() {
  var censordataurl = "";
  var censorurl = "";

  const [{ activecensor }] = useDataLayerValue();

  useEffect(() => {
    // useFetch(censordataurl);
  }, [activecensor]);

  useEffect(() => {
    // useFetch(censorurl);
  }, []);

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
