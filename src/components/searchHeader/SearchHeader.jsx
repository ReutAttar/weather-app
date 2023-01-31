import React, { useMemo } from "react"
import "./SearchHeader.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites, addToFavorites } from '../../redux/weatherSlice'
import Select from "../select/Select"
import filledStar from "../../assets/icons/filled-start.svg";
import unfilledStar from "../../assets/icons/unfilled-start.svg";

const SearchHeader = () => {
    const dispatch = useDispatch();
    const { favoriteCities, selectedCity } = useSelector((state) => state.weather);

    const isFavorite = useMemo(
        () => favoriteCities.some((city) => city?.value === selectedCity?.value),
        [favoriteCities, selectedCity]);

    const icon = isFavorite ? filledStar : unfilledStar;

    return (
        <div className="container">
            <div className="title-container">
                <div className="title">Weather by city</div>
                <Select />
            </div>

            <button type="button"
                className="favorite-button"
                onClick={() => {
                    isFavorite ? dispatch(removeFromFavorites(selectedCity)) : dispatch(addToFavorites(selectedCity))
                }}>
                <img src={icon} alt={"favorite icon"} width={45} height={45} />
            </button>
        </div>
    )
}

export default SearchHeader