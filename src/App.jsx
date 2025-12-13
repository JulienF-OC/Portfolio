import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* PAGE D’ACCUEIL */}
        <Route
          path="/"
          element={
            <>
              <Content />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
