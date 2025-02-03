import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherCheck from "./WeatherCheck";
import WeatherPage from "./WeatherPage"; // Create this new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherCheck />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
