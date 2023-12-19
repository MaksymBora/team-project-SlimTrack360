import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';

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
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = userAuthSlice.reducer;
