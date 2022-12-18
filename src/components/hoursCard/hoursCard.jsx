import React from "react";
import { getIcon, padTo2Digits, getTempUnitIcon } from "../../utils";
import "./hoursCard.css"
import { useSelector } from 'react-redux'

const HoursCard = ({ data }) => {
  const { tempUnits } = useSelector((state) => state.weather);
  const { darkModeOn } = useSelector((state) => state.darkMode);

  return (
    <div className={`hours-card ${darkModeOn ? "dark" : "light"}`}>
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
              {getTempUnitIcon(tempUnits, darkModeOn)}
            </div>
          </div>
        )
      }
      )}
    </div>
  );
};

export default HoursCard;
