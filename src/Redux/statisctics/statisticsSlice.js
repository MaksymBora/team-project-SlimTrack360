import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './operations';

const initialState = {
  totalCalories: null,
  totalWater: null,
  month: null,
  data: [],
  error: null,
  status: 'idle',
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.totalCalories = action.payload.totalCalories;
        state.totalWater = action.payload.totalWater;
        state.month = action.payload.month;
        state.data = action.payload[action.payload.month];
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default statisticsSlice.reducer;
