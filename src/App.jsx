import React, { useState, useEffect } from "react";
import "./App.css";
import dayBackground from "./assets/images/day-sky.jpg";
import nightBackground from "./assets/images/night-sky.jpg";
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { loadFavoritesFromStorage } from "./redux/weatherSlice";
import Header from "./components/header/Header";
import RoutesComponent from "./Routes";

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

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteCities"));
    if (favorites && favorites.length > 0) {
      dispatch(loadFavoritesFromStorage(favorites))
    }
  }, [])

  return (
      <div
      className="background-image"
        style={{
          backgroundImage: darkModeOn ? `${backgroundImageColor} ,url(${backgroundImage})` : `url(${backgroundImage})`,
        }}
      >
      <Router>
        <Header />
        <RoutesComponent />
      </Router>

    </div>
  );
}

export default App;
