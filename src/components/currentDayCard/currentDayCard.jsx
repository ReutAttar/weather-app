import React, { useContext } from "react";
import "./currentDayCard.css";
import ThemeContext from "../../contexts/themeContext";
import { getIcon, getWeekday, padTo2Digits } from "../../utils";

const CurrentDayCard = ({ data }) => {
  const [theme] = useContext(ThemeContext);

  const icon = getIcon(data.WeatherIcon);
  const date = new Date(data.LocalObservationDateTime)
  const hour = `${padTo2Digits(date.getUTCHours())}:${padTo2Digits(date.getUTCMinutes())}`
  const dayDate = `${date.getDate()} ${date.toLocaleString("en-us", {
    month: 'short',
  })}`
  const currentTime = `${dayDate} ${hour}`
  const day = getWeekday(date.getDay());
  return (
    <div className="currentCard" style={{ backgroundColor: theme.cardBackgroundColor, color: theme.textColor }}>
      <div className="date-container">
        <div className="day">{day}</div>
        <div className="date">{currentTime}</div>
      </div>
      <div className="icon">
        <img src={icon} alt={"weather icon"} width={90} height={90} />
      </div>
      <div className="info">{data.WeatherText}</div>
      <div className="temp">
        <div className="currentTemp">
          <div>
            current temp
          </div>
          <div>
            {data.Temperature.Metric.Value}</div>
        </div>
        <div className="feelsLike">
          <div>
            feels like
          </div>
          <div>
            {data.RealFeelTemperature.Metric.Value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDayCard;
