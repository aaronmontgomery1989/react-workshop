import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import List from "./components/List";
import Item from "./components/Item";
import { useEffect, useState } from "react";

function App() {
  const [donuts, setDonuts] = useState([]);

  useEffect(() => {
    fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
      .then((response) => response.json())
      .then((data) => setDonuts(data.results));
  }, []);

  return (
    <div className="App">
      <Router>
        <header>
          <h1>Donuts</h1>
        </header>
        <Routes>
          <Route path="/" element={<List donuts={donuts} />} />
          <Route path="/details/:id" element={<Item />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
