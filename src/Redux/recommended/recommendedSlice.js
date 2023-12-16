import { createSlice } from '@reduxjs/toolkit';
import { fetchFood } from './operations';

const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recommendedReducer = recommendedSlice.reducer;
