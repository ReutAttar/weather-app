import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedCity: {},
    currentWeather: {},
    fiveDaysForecast: [],
    twelveHoursForecast: [],
    tempUnits: "Metric",
    isDayTime: true,
    favoriteCities: [],
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload;
        },
        setCurrentWeather: (state, action) => {
            state.currentWeather = action.payload;
        },
        setFiveDaysForecast: (state, action) => {
            state.fiveDaysForecast = action.payload
        },
        setTwelveHoursForecast: (state, action) => {
            state.twelveHoursForecast = action.payload
        },
        toggleTempUnits: (state) => {
            state.tempUnits = state.tempUnits === "Metric" ? "Imperial" : "Metric";
        },
        setIsDayTime: (state, action) => {
            state.isDayTime = action.payload;
        },
        addToFavorites: (state, action) => {
            state.favoriteCities.push(action.payload);
            localStorage.setItem("favoriteCities", state.favoriteCities)
        },
        removeFromFavorites: (state, action) => {
            const index = state.favoriteCities.findIndex((city) => city.value === action.payload.value)
            if (index !== -1) {
                state.favoriteCities.splice(index)
                localStorage.setItem("favoriteCities", state.favoriteCities)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setSelectedCity,
    setCurrentWeather,
    setFiveDaysForecast,
    setTwelveHoursForecast,
    toggleTempUnits,
    setIsDayTime,
    addToFavorites,
    removeFromFavorites
} = weatherSlice.actions

export default weatherSlice.reducer