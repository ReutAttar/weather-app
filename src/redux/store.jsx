import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import darkModeReducer from './darkModeSlice'

export default configureStore({
    reducer: {
        weather: weatherReducer,
        darkMode: darkModeReducer,
    },
})