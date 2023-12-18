import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://healthyhub-emsa.onrender.com/api',
});

export const addWater = createAsyncThunk(
  'waterIntake/post',
  async (value, thunkAPI) => {
    try {
      const response = await instance.post('/user/water-intake', {
        date: new Date().toISOString(),
        water: value,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding water:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetWater = createAsyncThunk(
  'waterIntake/reset',
  async (date, thunkAPI) => {
    try {
      const response = await instance.post('user/water-intake', {
        date,
        value: 0,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterToday = createAsyncThunk(
  'waterIntake/getForToday',
  async (date, thunkAPI) => {
    try {
      // const currentDate = new Date().toISOString();
      const response = await instance.get('user/water-intake', date);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
