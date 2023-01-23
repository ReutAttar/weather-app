import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/favorite/Favorites";
import dayBackground from "./assets/images/day-sky.jpg";
import nightBackground from "./assets/images/night-sky.jpg";
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Switch as SwitchButton } from "antd"
import darkIcon from "./assets/icons/clear-night.svg"
import lightIcon from "./assets/icons/clear-day.svg"
import { toggleTempUnits } from "./redux/weatherSlice";
import { toggleDarkMode } from "./redux/darkModeSlice"

function App() {
  const [backgroundImage, setBackgroundImage] = useState(dayBackground);
  const { isDayTime } = useSelector((state) => state.weather);
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const backgroundImageColor = "linear-gradient(rgb(8, 14, 44, 0.75), rgba(8, 14, 44, 0.7), rgba(8, 14, 44, 0.6), rgba(8, 14, 44, 0.3))"
  const dispatch = useDispatch();

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
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        }}
      >
      <Router>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>

          <div className="switch-buttons">
            <SwitchButton
              checkedChildren={
                <img
                  src={darkIcon}
                  alt="moonIcon"
                  width="25"
                  height="25"
                />
              }
              unCheckedChildren={
                <img
                  src={lightIcon}
                  alt="sunIcon"
                  width="25"
                  height="25"
                />
              }
              style={{ background: "#00000040", minWidth: "60px", height: "30px" }}
              onChange={(checked) => (checked ? dispatch(toggleDarkMode()) : dispatch(toggleDarkMode()))}
            />
            <SwitchButton
              checkedChildren={'F'}
              unCheckedChildren={'C'}
              style={{ background: "#00000040", margin: '0 30px 0 30px', minWidth: "60px", height: "30px" }}
              onChange={(checked) => (checked ? dispatch(toggleTempUnits()) : dispatch(toggleTempUnits()))}
            />
          </div>
        </div>

        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
