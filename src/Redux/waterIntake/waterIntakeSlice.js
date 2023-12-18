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

  state.id = action.payload._id;
  state.date = action.payload.date;
  state.value = action.payload.value;
  state.error = null;
};

const handleResetFulfilled = (state, action) => {
  state.isLoading = false;
  state.id = action.payload._id;
  state.date = action.payload.date;
  state.value = action.payload.value;
  state.error = null;
};

const handleGetWaterTodayFulfilled = (state, action) => {
  state.isLoading = false;
  state.id = action.payload._id;
  state.date = action.payload.date;
  state.value = action.payload.value;
  state.error = null;
};

const initialState = {
  id: null,
  date: null,
  value: null,
};

const waterIntakeSlice = createSlice({
  name: 'waterIntake',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addWater.fulfilled, handleAddFulfiled)
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.rejected, handleRejected)
      .addCase(resetWater.fulfilled, handleResetFulfilled)
      .addCase(resetWater.pending, handlePending)
      .addCase(resetWater.rejected, handleRejected)
      .addCase(getWaterToday.fulfilled, handleGetWaterTodayFulfilled)
      .addCase(getWaterToday.pending, handlePending)
      .addCase(getWaterToday.rejected, handleRejected);
  },
});

export const waterIntakeReducer = waterIntakeSlice.reducer;
