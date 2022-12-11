import React, { useContext } from "react";
import { getIcon } from "../../utils";
import "./hoursCard.css"
import ThemeContext from "../../contexts/themeContext";

const HoursCard = ({ data }) => {
  const [theme] = useContext(ThemeContext);

  const padTo2Digits = (num) => {
    return String(num).padStart(2, '0');
  }

  return (
    <div className="hours-card" style={{ backgroundColor: theme.cardBackgroundColor, color: theme.textColor }}>
      {data.map((object) => {
        const date = new Date(object.DateTime)
        const hour = `${padTo2Digits(date.getUTCHours())}:${padTo2Digits(date.getUTCMinutes())}`
        return (

          <div className="col">
            <div className="hour">{hour}</div>
            <div className="icon">
              <img src={getIcon(object.WeatherIcon)} alt={"weather icon"} width={80} height={80} />
            </div>
            <div className="temp">{object.Temperature.Value}</div>
          </div>
        )
      }
      )}
    </div>
  );
};

export default HoursCard;
