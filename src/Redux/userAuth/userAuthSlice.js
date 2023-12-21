import { createSlice } from '@reduxjs/toolkit';
import {
  forgotPassword,
  logIn,
  logOut,
  refreshUser,
  udpdateWeight,
  updateUserGoal,
  updateUserParams,
} from './operations';

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

// -------- Log Out ----------- //

const handleLogoutRejected = (state, { payload }) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = payload;
};

const handleLogoutFullfilled = (state) => {
  state.token = null;
  state.isRefreshing = false;
  state.isLoggedIn = false;
};

const handleLogoutPending = (state) => {
  state.isRefreshing = true;
};

// -------- Log Out ----------- //
const handleForgotPasswordRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

const handleForgotPasswordFullfilled = (state) => {
  state.isRefreshing = false;
};

const handleForgotPasswordPending = (state) => {
  state.isRefreshing = true;
};

// -------- Update User Params ----------- //

const handleUpdateParamsRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

const handleUpdateParamsFullfilled = (state, { payload }) => {
  state.isRefreshing = false;
  state.user = payload;
};

const handleUpdateParamsPending = (state) => {
  state.isRefreshing = true;
};

// -------- Update User Weight ----------- //

const handleUpdateWeightRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

const handleUpdateWeightFullfilled = (state, { payload }) => {
  state.isRefreshing = false;
  state.user.currentWeight = payload.currentWeight;
};

const handleUpdateWeightPending = (state) => {
  state.isRefreshing = true;
};

// -------- User Goal ----------- //

const handleUserGoalFulfilled = (state, action) => {
  state.goal = action.payload.goal;
};

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
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addCase(logOut.pending, handleLogoutPending)
      .addCase(logOut.fulfilled, handleLogoutFullfilled)
      .addCase(logOut.rejected, handleLogoutRejected)
      .addCase(forgotPassword.pending, handleForgotPasswordPending)
      .addCase(forgotPassword.fulfilled, handleForgotPasswordFullfilled)
      .addCase(forgotPassword.rejected, handleForgotPasswordRejected)
      .addCase(updateUserParams.pending, handleUpdateParamsPending)
      .addCase(updateUserParams.fulfilled, handleUpdateParamsFullfilled)
      .addCase(updateUserParams.rejected, handleUpdateParamsRejected)
      .addCase(udpdateWeight.pending, handleUpdateWeightPending)
      .addCase(udpdateWeight.fulfilled, handleUpdateWeightFullfilled)
      .addCase(udpdateWeight.rejected, handleUpdateWeightRejected)
      .addCase(updateUserGoal.fulfilled, handleUserGoalFulfilled);
  },
});

export const authReducer = userAuthSlice.reducer;
