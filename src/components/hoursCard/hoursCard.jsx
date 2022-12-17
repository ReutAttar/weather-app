import React, { useContext } from "react";
import { getIcon, padTo2Digits, getTempUnitIcon } from "../../utils";
import "./hoursCard.css"
import ThemeContext from "../../contexts/themeContext";
import { useSelector } from 'react-redux'

const HoursCard = ({ data }) => {
  const [theme] = useContext(ThemeContext);
  const { tempUnits } = useSelector((state) => state.weather);

  return (
    <div className="hours-card" style={{ backgroundColor: theme.cardBackgroundColor, color: theme.textColor }}>
      {data.map((object, index) => {
        const date = new Date(object.DateTime)
        const hour = `${padTo2Digits(date.getUTCHours())}:${padTo2Digits(date.getUTCMinutes())}`
        return (

          <div className="col" key={index}>
            <div className="hour">{hour}</div>
            <div className="icon">
              <img src={getIcon(object.WeatherIcon)} alt={"weather icon"} width={80} height={80} />
            </div>
            <div className="temp">
              {Math.round(object.Temperature.Value)}
              {getTempUnitIcon(tempUnits)}
            </div>
          </div>
        )
      }
      )}
    </div>
  );
};

export default HoursCard;
