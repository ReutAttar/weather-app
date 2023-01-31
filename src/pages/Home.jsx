import React, { useEffect } from "react";
import SearchHeader from "../components/searchHeader/SearchHeader";
import Forecast from "../components/forecast/Forecast";
import CurrentForecast from "../components/currentForecast/CurrentForecast";
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCity } from "../redux/weatherSlice"

const Home = () => {
  const dispatch = useDispatch()
  const { selectedCity } = useSelector((state) => state.weather);

  useEffect(() => {
    !selectedCity.value && dispatch(setSelectedCity({ label: 'Tel Aviv, Israel', value: 215854 }))
  }, [selectedCity, dispatch]);

  return (
    <div className="main-container">
      <SearchHeader />
      <CurrentForecast />
      <Forecast />
    </div>
  );
};

export default Home;
