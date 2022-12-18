import React from "react";
import "./currentDayCard.css";
import { getIcon, getWeekday, padTo2Digits, getTempUnitIcon } from "../../utils";
import { useSelector } from 'react-redux'


const CurrentDayCard = ({ data }) => {
  const { tempUnits } = useSelector((state) => state.weather);
  const { darkModeOn } = useSelector((state) => state.darkMode);
  const icon = getIcon(data.WeatherIcon);
  const date = new Date(data.LocalObservationDateTime)
  const hour = `${padTo2Digits(date.getUTCHours())}:${padTo2Digits(date.getUTCMinutes())}`
  const dayDate = `${date.getDate()} ${date.toLocaleString("en-us", {
    month: 'short',
  })}`
  const currentTime = `${dayDate} ${hour}`
  const day = getWeekday(date.getDay());

  return (
    <div className={`currentCard ${darkModeOn ? "dark" : "light"}`} >
      <div className="date-container">
        <div className="day">{day}</div>
        <div className="date">{currentTime}</div>
      </div>
      <div className="icon">
        <img src={icon} alt={"weather icon"} width={90} height={90} />
      </div>
      <div className="info">{data.WeatherText}</div>
      <div className="temps">
        <div className="currentTemp">
          <div>
            current temp
          </div>
          <div className="temp">
            {Math.round(data.Temperature[tempUnits].Value)}
            {getTempUnitIcon(tempUnits, darkModeOn)}
          </div>
        </div>
        <div className="feelsLike">
          <div>
            feels like
          </div>
          <div className="temp">
            {Math.round(data.RealFeelTemperature[tempUnits].Value)}
            {getTempUnitIcon(tempUnits, darkModeOn)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDayCard;
