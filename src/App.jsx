import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import dayBackground from "./assets/images/cloud-blue-sky.jpg";
// import nightBackground from "./assets/images/night-sky.jpg";
import ThemeContext, { themes } from "./contexts/themeContext";


function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <div
        style={{
          backgroundImage: currentTheme.backgroundImage ? `${currentTheme.backgroundImage} ,url(${dayBackground})` : `url(${dayBackground})`,
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
