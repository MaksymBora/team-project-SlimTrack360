import { createSlice } from '@reduxjs/toolkit';
import { addFoodIntake, fetchFoodIntake, updateFoodIntake } from './operations';

const initialState = {
  data: {
    id: null,
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

const handleFulfildUpdate = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const type = action.payload.data.type;
  const indexOfFood = state.food[type].findIndex(
    (item) => item.ident === action.payload.data.product.ident
  );
  state.food[type][indexOfFood] = action.payload.data.product;
  state.totalCalories = action.payload.data.totalCalories;
};

const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  reducers: {
    clearDiary() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodIntake.fulfilled, handleDailyDiaryFullfilled)
      .addCase(fetchFoodIntake.pending, handlePending)
      .addCase(fetchFoodIntake.rejected, handleRejected)
      .addCase(addFoodIntake.fulfilled, handleAddFoodFullfilled)
      .addCase(addFoodIntake.pending, handlePending)
      .addCase(addFoodIntake.rejected, handleRejected)
      .addCase(updateFoodIntake.fulfilled, handleFulfildUpdate)
      .addCase(updateFoodIntake.pending, handlePending)
      .addCase(updateFoodIntake.rejected, handleRejected);
  },
});

export const { clearDiary } = foodIntakeSlice.actions;
export default foodIntakeSlice.reducer;
