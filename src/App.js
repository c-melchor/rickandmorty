import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <h1 className="txt">Rick and Morty</h1>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </div>
  );
}

export default App;
