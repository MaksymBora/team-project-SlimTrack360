import { createSlice } from '@reduxjs/toolkit';
import { logIn, refreshUser } from './operations';

const handlePending = (state) => {
  state.error = null;
  state.isRefreshing = true;
};

const handleRejected = (state, payload) => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.token = null;
  state.error = payload;
};

// -------- Sign In ----------- //

const handleSignInFullfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.user.token;
  state.isRefreshing = false;
  state.isLoggedIn = true;
};

// -------- Refresh ----------- //

const handleRefreshRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.token = null;
  state.error = payload;
};

const handleRefreshFullfilled = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
};

const handleRefreshPending = (state) => {
  state.isRefreshing = true;
};

// -------- Registration ----------- //

// const handleRegistrationPending = (state) => {
//   state.isRefreshing = true;
// };

// const handleRegistrationRejected = (state, { payload }) => {
//   state.isLoggedIn = false;
//   state.isRefreshing = false;
//   state.token = null;
//   state.error = payload;
// };

// const handleRegistrationFullfilled = (state, { payload }) => {
//   state.isLoading = false;
//   state.isLoggedIn = false;
// };

const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    goal: null,
    sex: null,
    age: null,
    height: null,
    currentWeight: null,
    levelActivity: null,
    dailyGoalCalories: null,
    dailyGoalWater: null,
    dailyGoalElements: {
      carbonohidrates: null,
      protein: null,
      fat: null,
    },
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleSignInFullfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFullfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected);
  },
});

export const authReducer = userAuthSlice.reducer;
