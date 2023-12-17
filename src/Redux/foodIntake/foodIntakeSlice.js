import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  date: null,
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
};
const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const foodIntakeReducer = foodIntakeSlice.reducer;
