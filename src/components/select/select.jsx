import React, { useState, useEffect, useCallback } from "react";
import AsyncSelect from 'react-select/async';
import { FETCH_CITIES } from "../../apis/apis";
import useDebounce from "../../hooks/useDebounce";

const Select = () => {

    const loadOptions = useCallback(
        useDebounce((inputValue, callback) => {
            fetchCities(inputValue).then(options => callback(options))
        }, 500),
        []
    );

    const fetchCities = async (inputValue) => {
        const response = await fetch(`${FETCH_CITIES}${process.env.REACT_APP_ACCUWEATHER_API}&q=${inputValue}`);
        const json = await response.json();
        return json.map((obj) => {
            return { label: `${obj.LocalizedName}, ${obj.Country.LocalizedName}`, value: obj.Key };
        })
    };

    return (
        <AsyncSelect styles={{
            container: (baseStyles, state) => ({
                ...baseStyles,
                width: '20%',
            })
        }}
            isClearable
            cacheOptions
            loadOptions={loadOptions}
        />
    )
}

export default Select;
