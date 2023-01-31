import React, { useState, useEffect } from 'react';
import './Forecast.css'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_FIVE_DAYS_FORECAST } from "../../apis/apis";
import { setFiveDaysForecast } from "../../redux/weatherSlice";
import DayCard from "../dayCard/DayCard";
import { getErrorMessage } from '../../utils';

const Forecast = () => {
    const { selectedCity, tempUnits, fiveDaysForecast } = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (selectedCity && selectedCity.value) {
            fetchForecast();
        }
    }, [selectedCity, tempUnits])

    const fetchForecast = async () => {
        try {
            const fetchByUnits = tempUnits === "Metric" ? `${FETCH_FIVE_DAYS_FORECAST}${selectedCity.value}?apikey=${process.env.REACT_APP_ACCUWEATHER_API}&details=true&metric=true` :
                `${FETCH_FIVE_DAYS_FORECAST}${selectedCity.value}?apikey=${process.env.REACT_APP_ACCUWEATHER_API}&details=true`;

            const response = await fetch(fetchByUnits);
            const json = await response.json();
            dispatch(setFiveDaysForecast(json.DailyForecasts))
        }
        catch (err) {
            setError(true);
        }
    }

    return (
        <div className="cards">
            {
                error ? getErrorMessage() :
                    fiveDaysForecast.map((data, index) => (
                        <DayCard
                            key={index}
                            data={data}
                        />
                    ))}
        </div>
    )
}

export default Forecast