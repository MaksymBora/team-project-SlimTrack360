import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  date: null,
  waterConsumption: null,
};
const waterIntakeSlice = createSlice({
  name: 'waterIntake',
  initialState,
  //   extraReducers: (builder) => {
  //     builder.addCase();
  //   },
});

export const waterIntakeReducer = waterIntakeSlice.reducer;
