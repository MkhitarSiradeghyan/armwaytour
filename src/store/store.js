import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import {reducer as slidersReducer} from "./reducers/sliders.slice"
import { api } from "./api/api"

const reducer = combineReducers({
    sliders: slidersReducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})