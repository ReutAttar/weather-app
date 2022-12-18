import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import dayBackground from "./assets/images/cloud-blue-sky.jpg";
import nightBackground from "./assets/images/night-sky.jpg";
import { useSelector } from 'react-redux'

function App() {
  const [backgroundImage, setBackgroundImage] = useState(dayBackground);
  const { isDayTime } = useSelector((state) => state.weather);
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const backgroundImageColor = "linear-gradient(rgb(8, 14, 44), rgb(8 14 44 / 86%), rgba(8, 14, 44, 0.8), rgba(8, 14, 44, 0.7), rgba(8, 14, 44, 0.3))"

  useEffect(() => {
    if (!isDayTime) {
      setBackgroundImage(nightBackground);
    }
    else setBackgroundImage(dayBackground)

  }, [isDayTime])

  return (
      <div
        style={{
        backgroundImage: darkModeOn ? `${backgroundImageColor} ,url(${backgroundImage})` : `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Home />
    </div>
  );
}

export default App;
