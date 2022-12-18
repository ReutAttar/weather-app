import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkModeOn: false,
};

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkModeOn = !state.darkModeOn;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    toggleDarkMode
} = darkModeSlice.actions

export default darkModeSlice.reducer