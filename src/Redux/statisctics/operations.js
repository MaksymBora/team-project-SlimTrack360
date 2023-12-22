// src/Redux/statisctics/operations.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://healthyhub-emsa.onrender.com/',
});

export const getStatistics = createAsyncThunk(
  'statistics/get',
  async (month, thunkAPI) => {
    try {
      const response = await instance.get('api/user/statistics', {
        params: {
          month,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
