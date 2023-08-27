import { createSlice } from "@reduxjs/toolkit";

export const slidersSlice =  createSlice({
    name: 'sliders',
    initialState: [],
    reducers: {
        addSlider: (state, {payload}) => {
            state.push(payload)
        }
    }
})
export const {actions, reducer} = slidersSlice