import { createSlice } from '@reduxjs/toolkit';
import { updateUserSettings } from './operations';
import { toast } from 'react-toastify';

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
  isLoggedIn: true,
  isRefreshing: false,
};

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateUserSettings.fulfilled, (state, action) => {
        toast.success('Settings changed successfully');
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.sex = action.payload.sex;
        state.age = action.payload.age;
        state.height = action.payload.height;
        state.avatarUrl = action.payload.avatarUrl;
        state.currentWeight = action.payload.currentWeight;
        state.levelActivity = action.payload.levelActivity;
        state.dailyGoalWater = action.payload.dailyGoalWater;
        state.dailyGoalCalories = action.payload.dailyGoalCalories;
        state.dailyGoalElements = action.payload.dailyGoalElements;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUserSettings.rejected, (state, action) => {
        toast.error(action.payload);
      });
  },
});

export const authReducer = userAuthSlice.reducer;
