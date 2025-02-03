import React from "react";
import { useNavigate } from "react-router-dom";
function WeatherCheck() {
 const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Would you like to check the weather?</h2>
      <button onClick={() => navigate("/weather")}>Check Weather</button>
    </div>
  );
}

export default WeatherCheck;
