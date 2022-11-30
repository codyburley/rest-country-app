import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://restcountries.com/v2/all';

const initialState = {
  countries: [],
  isLoading: true
}

export const getCountryList = createAsyncThunk('countryList/getCountryList', () => {
  return fetch(url)
    .then(response => response.json())
    .catch((error) => console.log(error));
})

const countryListSlice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getCountryList.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountryList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    },
    [getCountryList.rejected]: (state) => {
      state.isLoading = false;
    }
  }
})

export const { } = countryListSlice.actions;

export default countryListSlice.reducer;