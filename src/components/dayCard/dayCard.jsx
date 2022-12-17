import React, { useContext } from "react";
import "./dayCard.css";
import ThemeContext from "../../contexts/themeContext";
import { getIcon, getWeekday, getTempUnitIcon } from "../../utils";
import { useSelector } from 'react-redux'
import { Tooltip } from 'antd';

const DayCard = ({ data }) => {
  const [theme] = useContext(ThemeContext);
  const { tempUnits } = useSelector((state) => state.weather);
  const icon = getIcon(data.Day.Icon);
  const date = new Date(data.Date)
  const dayDate = `${date.getDate()} ${date.toLocaleString("en-us", {
    month: 'short',
  })}`
  const day = getWeekday(date.getDay());

  return (
    <Tooltip title={data.Day.ShortPhrase}>
    <div className="card" style={{ backgroundColor: theme.cardBackgroundColor, color: theme.textColor }}>
      <div className="date-container">
        <div className="day">{day}</div>
        <div className="date">{dayDate}</div>
      </div>
      <div className="icon">
        <img src={icon} alt={"weather icon"} width={130} height={130} />
      </div>
        <div className="temps-row">
          <div className="max">
            {Math.round(data.Temperature.Maximum.Value)}
            {getTempUnitIcon(tempUnits)}
          </div>
          <div className="min">
            {Math.round(data.Temperature.Minimum.Value)}
            {getTempUnitIcon(tempUnits)}
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default DayCard;
