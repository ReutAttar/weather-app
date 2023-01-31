import React, { useEffect, useState } from "react";
import CurrentDayCard from "../../components/currentDayCard/CurrentDayCard";
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCity } from "../../redux/weatherSlice"
import { FETCH_CURRENT_FORECAST } from "../../apis/apis";
import { Spin } from 'antd';
import "./Favorites.css"
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../utils";

const Favorites = () => {
    const { favoriteCities } = useSelector((state) => state.weather);
    const dispatch = useDispatch()
    const [favoritesForecast, setFavoritesForecast] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (favoriteCities.length > 0) {
            const fetchData = async () => {
                try {
                    const promises = await favoriteCities.map(city =>
                        fetch(`${FETCH_CURRENT_FORECAST}${city.value}?apikey=${process.env.REACT_APP_ACCUWEATHER_API}&details=true`)
                            .then(res => res.json())
                    );
                    const Forecasts = await Promise.all(promises)
                    const results = Forecasts.map(forecast => forecast[0])
                    setFavoritesForecast(results)
                    setLoading(false)
                } catch (err) {
                    console.error("error", err)
                    setError(true);
                }
            }

            fetchData()
        }

    }, [favoriteCities])

    const onCardClick = (cityValue) => {
        dispatch(setSelectedCity(cityValue))
        navigate('/')
    }

    return (
        <div className="favorites-container">
            {
                favoriteCities.length === 0 ? "No favorites cities" :
                    loading ? <div className='loader'> <Spin tip="Loading" size="large" /> </div> :
                        error ? getErrorMessage() :
                            favoritesForecast.map((forecast, index) =>
                                <div className="favorite-card" key={index} onClick={() => onCardClick(favoriteCities[index])}>
                                    <CurrentDayCard data={forecast} city={favoriteCities[index].label} />
                                </div>
                            )
            }
        </div>
    );
};

export default Favorites;