import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  period: null,
  totalCalories: null,
  totalWater: null,
  totalFood: null,
};
const statisticsSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const statisticsReducer = statisticsSlice.reducer;
