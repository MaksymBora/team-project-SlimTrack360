// src\Redux\waterIntake\selector.js

// export const selectId = (state) => selectWaterIntake(state).id;
// export const selectDate = (state) => selectWaterIntake(state).date;
export const selectValue = (state) => state.waterIntake.value;
export const selectIsLoading = (state) => state.waterIntake.isLoading;
export const selectError = (state) => state.waterIntake.error;
