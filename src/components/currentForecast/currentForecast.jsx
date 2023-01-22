import React, { useEffect, useState } from 'react';
import './currentForecast.css'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_TWELVE_HOURS_FORECAST, FETCH_CURRENT_FORECAST } from "../../apis/apis";
import { setCurrentWeather, setTwelveHoursForecast, setIsDayTime } from "../../redux/weatherSlice";
import CurrentDayCard from '../currentDayCard/currentDayCard';
import HoursCard from '../hoursCard/hoursCard';
import { Spin } from 'antd';

const CurrentForecast = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { selectedCity, tempUnits, currentWeather, twelveHoursForecast } = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedCity && selectedCity.value) {
            fetchCurrentForecast();
            fetch12HoursForecast();
        }
    }, [selectedCity, tempUnits])

    const fetchCurrentForecast = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${FETCH_CURRENT_FORECAST}${selectedCity.value}?apikey=${process.env.REACT_APP_ACCUWEATHER_API}&details=true`);
            const json = await response.json();
            dispatch(setCurrentWeather(json[0]))
            dispatch(setIsDayTime(json[0].IsDayTime))
            setLoading(false);
        }
        catch (err) {
            setError(true);
            setLoading(false);
        }
    };


    const fetch12HoursForecast = async () => {
        setLoading(true);
        try {
            const fetchByUnits = tempUnits === "Metric" ? `${FETCH_TWELVE_HOURS_FORECAST}${selectedCity.value}?apikey=${process.env.REACT_APP_ACCUWEATHER_API}&details=true&metric=true` :
                `${FETCH_TWELVE_HOURS_FORECAST}${selectedCity.value}?apikey=${process.env.REACT_APP_ACCUWEATHER_API}&details=true`;

            const response = await fetch(fetchByUnits);
            const json = await response.json();
            dispatch(setTwelveHoursForecast(json))
            setLoading(false);
        }
        catch (err) {
            setError(true);
            setLoading(false);
        }

    }

    return (
        <div className="current-container">
            {loading ? <div className='loader'> <Spin tip="Loading" size="large" /> </div> :
                error ? "Something went wrong" :
                <>
                    <CurrentDayCard data={currentWeather} />
                    <HoursCard data={twelveHoursForecast} />
                </>
            }
        </div>
    )
}

export default CurrentForecast