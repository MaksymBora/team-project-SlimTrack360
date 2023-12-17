import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  avatarUrl: null,
  goal: null,
  sex: null,
  age: null,
  height: 185,
  currentWeight: null,
  levelActivity: null,
  dailyGoalCalories: null,
  dailyGoalWater: null,
  dailyGoalElements: {
    carbonohidrates: null,
    protein: null,
    fat: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
};
const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const authReducer = userAuthSlice.reducer;
