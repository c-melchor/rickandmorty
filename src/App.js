import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <h1 className="txt">Rick and Morty</h1>
      <Home />
    </div>
  );
}

export default App;
