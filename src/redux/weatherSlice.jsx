import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedCity: {},
    currentWeather: {},
    fiveDaysForecast: [],
    twelveHoursForecast: [],
    tempUnits: "Metric",
    isDayTime: false,
    // favoriteCities: [],
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
    },
})

// Action creators are generated for each case reducer function
export const {
    setSelectedCity,
    setCurrentWeather,
    setFiveDaysForecast,
    setTwelveHoursForecast,
    toggleTempUnits,
    setIsDayTime
} = weatherSlice.actions

export default weatherSlice.reducer