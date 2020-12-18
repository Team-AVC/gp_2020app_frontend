import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
