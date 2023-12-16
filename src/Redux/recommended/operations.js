import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFood = createAsyncThunk(
  'recommended/fetchFood',
  async (_, thunkAPI) => {
    const url = new URL(
      'https://healthyhub-emsa.onrender.com/api/recommended-food'
    );

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };
    try {
      const response = await axios.get(`${url}`, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);
