// src\Redux\waterIntake\waterIntakeSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { addWater, resetWater, getWaterToday } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddFulfiled = (state, action) => {
  state.isLoading = false;

  state.date = action.payload.date;
  state.value = action.payload.value;
};

const handleResetFulfilled = (state, action) => {
  state.isLoading = false;

  state.date = action.payload.date;
  state.value = action.payload.value;
};

const handleGetWaterTodayFulfilled = (state, action) => {
  state.isLoading = false;
  state.date = action.payload.date;
  state.value = action.payload.value;
};

const initialState = {
  date: null,
  value: null,
  isLoading: false,
  error: null,
};

const waterIntakeSlice = createSlice({
  name: 'waterIntake',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, handleAddFulfiled)
      .addCase(addWater.rejected, handleRejected)
      .addCase(resetWater.pending, handlePending)
      .addCase(resetWater.fulfilled, handleResetFulfilled)
      .addCase(resetWater.rejected, handleRejected)
      .addCase(getWaterToday.pending, handlePending)
      .addCase(getWaterToday.fulfilled, handleGetWaterTodayFulfilled)
      .addCase(getWaterToday.rejected, handleRejected);
  },
});

export const waterIntakeReducer = waterIntakeSlice.reducer;
