import { createSlice } from '@reduxjs/toolkit';
import { addWater, resetWater, getWaterToday } from './operations';

const initialState = {
  id: null,
  date: null,
  value: null,
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleAddFulfiled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.id = action.payload.id;
  state.date = action.payload.date;
  state.value = action.payload.value;
};

const handleResetFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.id = action.payload._id;
  state.date = action.payload.date;
  state.value = action.payload.value;
};

const handleGetWaterTodayFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.id = action.payload._id;
  state.date = action.payload.date;
  state.value = action.payload.value;
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
