import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStatistics = createAsyncThunk(
  'statistics/getStatistics',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/user/statistics', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
