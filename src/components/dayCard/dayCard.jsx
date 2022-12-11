import React, { useContext } from "react";
import "./dayCard.css";
import ThemeContext from "../../contexts/themeContext";
import { getIcon } from "../../utils";

const DayCard = ({ data }) => {
  const [theme] = useContext(ThemeContext);

  const icon = getIcon(data.Day.Icon);
  const date = data.Date
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
      <div className="temp">
        <div className="max">{data.Temperature.Maximum.Value}</div>
        <div className="min">{data.Temperature.Minimum.Value}</div>
      </div>
    </div>
  );
};

export default DayCard;
