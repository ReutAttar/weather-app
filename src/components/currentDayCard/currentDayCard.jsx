import React, { useContext } from "react";
import "./currentDayCard.css";
import ThemeContext from "../../contexts/themeContext";
import { getIcon } from "../../utils";

const CurrentDayCard = ({ data }) => {
  const [theme] = useContext(ThemeContext);

  const icon = getIcon(data.WeatherIcon);
  const date = data.LocalObservationDateTime
  const day = "sunday"
  return (
    <div className="card" style={{ backgroundColor: theme.cardBackgroundColor, color: theme.textColor }}>
      <div className="date-container">
        <div className="day">{day}</div>
        <div className="date">{date}</div>
      </div>
      <div className="icon">
        <img src={icon} alt={"weather icon"} width={150} height={150} />
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
