import { configureStore } from "@reduxjs/toolkit";
import countryListReducer from './features/countryList/countryList'

export const store = configureStore({
  reducer: {
    countryList: countryListReducer,
  },
})