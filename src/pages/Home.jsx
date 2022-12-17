import React, { useEffect } from "react";
import Header from "../components/header/header";
import Forecast from "../components/forecast/forecast";
import CurrentForecast from "../components/currentForecast/currentForecast";
import { useDispatch } from 'react-redux'
import { setSelectedCity } from "../redux/weatherSlice"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSelectedCity({ label: 'Tel Aviv, Israel', value: 215854 }))
  }, []);

  return (
    <div className="main-container">
      <Header />
      <CurrentForecast />
      <Forecast />
    </div>
  );
};

export default Home;
