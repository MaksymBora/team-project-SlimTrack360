import { createSlice } from '@reduxjs/toolkit';
import {
  addFoodIntake,
  deleteFoodIntake,
  fetchFoodIntake,
  updateFoodIntake,
} from './operations';

const initialState = {
  data: {
    _id: null,
    date: null,
    totalCalories: null,
    totalFat: null,
    totalCarbonohidretes: null,
    totalProtein: null,
    breakfast: {
      totalCalories: null,
      totalFat: null,
      totalCarbonohidretes: null,
      totalProtein: null,
      products: [],
    },
    lunch: {
      totalCalories: null,
      totalFat: null,
      totalCarbonohidretes: null,
      totalProtein: null,
      products: [],
    },
    dinner: {
      totalCalories: null,
      totalFat: null,
      totalCarbonohidretes: null,
      totalProtein: null,
      products: [],
    },
    snack: {
      totalCalories: null,
      totalFat: null,
      totalCarbonohidretes: null,
      totalProtein: null,
      products: [],
    },
  },
  isLoading: false,
  error: null,
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleDailyDiaryFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.data = payload.data;
};

const handleAddFoodFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.data = payload.data;
};

const handleUpdateFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.data = payload.data;
};

const handleDeleteFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.data = payload.data;
};

const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodIntake.fulfilled, handleDailyDiaryFullfilled)
      .addCase(fetchFoodIntake.pending, handlePending)
      .addCase(fetchFoodIntake.rejected, handleRejected)
      .addCase(addFoodIntake.fulfilled, handleAddFoodFullfilled)
      .addCase(addFoodIntake.pending, handlePending)
      .addCase(addFoodIntake.rejected, handleRejected)
      .addCase(updateFoodIntake.fulfilled, handleUpdateFullfilled)
      .addCase(updateFoodIntake.pending, handlePending)
      .addCase(updateFoodIntake.rejected, handleRejected)
      .addCase(deleteFoodIntake.fulfilled, handleDeleteFullfilled)
      .addCase(deleteFoodIntake.pending, handlePending)
      .addCase(deleteFoodIntake.rejected, handleRejected);
  },
});

export default foodIntakeSlice.reducer;
