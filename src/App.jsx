import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import dayBackground from "./assets/images/cloud-blue-sky.jpg";
import nightBackground from "./assets/images/night-sky.jpg";
import ThemeContext, { themes } from "./contexts/themeContext";
import { useSelector } from 'react-redux'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const [backgroundImage, setBackgroundImage] = useState(dayBackground);
  const { isDayTime } = useSelector((state) => state.weather);

  useEffect(() => {
    if (!isDayTime) {
      setBackgroundImage(nightBackground);
    }

  }, [isDayTime])

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <div
        style={{
          backgroundImage: currentTheme.backgroundImage ? `${currentTheme.backgroundImage} ,url(${backgroundImage})` : `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
