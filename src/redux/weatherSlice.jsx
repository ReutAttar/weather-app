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
            localStorage.setItem("favoriteCities", JSON.stringify(state.favoriteCities))
        },
        removeFromFavorites: (state, action) => {
            const index = state.favoriteCities.findIndex((city) => city.value === action.payload.value)
            if (index !== -1) {
                state.favoriteCities.splice(index)
                localStorage.setItem("favoriteCities", JSON.stringify(state.favoriteCities))
            }
        },
        loadFavoritesFromStorage: (state, action) => {
            state.favoriteCities = action.payload
        }
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
    removeFromFavorites,
    loadFavoritesFromStorage
} = weatherSlice.actions

export default weatherSlice.reducer