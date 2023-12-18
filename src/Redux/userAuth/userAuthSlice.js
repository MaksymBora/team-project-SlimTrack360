import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
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
// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };
const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => state);
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state) => state);
  },
});

export const authReducer = userAuthSlice.reducer;
