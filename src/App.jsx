import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
