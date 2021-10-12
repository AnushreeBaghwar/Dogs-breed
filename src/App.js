import "./App.css";
import Dogs from "./components/Dogs";
import Breed from "./components/Breed";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dogs} />
          <Route path="/breed/:name" component={Breed} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
