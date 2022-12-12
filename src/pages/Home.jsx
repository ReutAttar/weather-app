import React from "react";
import DayCard from "../components/dayCard/dayCard";
import Header from "../components/header/header";
import CurrentDayCard from "../components/currentDayCard/currentDayCard";
import HoursCard from "../components/hoursCard/hoursCard";
import mock5Days from "../mockFiveDaysForecast.json";
import mockCurrent from "../mockCurrentConditions.json";
import mockHours from "../mockTwelveHoursForecast.json"

const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="current-container">
        {<CurrentDayCard
          data={mockCurrent[0]}
        />}
        {<HoursCard data={mockHours} />}
      </div>
      <div className="cards">
        {mock5Days.DailyForecasts.map((data, index) => (
          <DayCard
            key={index}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
