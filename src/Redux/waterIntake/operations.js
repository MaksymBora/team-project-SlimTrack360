import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addWater = createAsyncThunk(
  'waterIntake/post',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/user/water-intake', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetWater = createAsyncThunk(
  'waterIntake/reset',
  async (date, thunkAPI) => {
    console.log('OPERATION >>>>>', date);
    try {
      const response = await axios.delete(`/user/water-intake`, { data: date });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterToday = createAsyncThunk(
  'waterIntake/getForToday',
  async (dateToday, thunkAPI) => {
    try {
      const response = await axios.post('/user/water-intake', dateToday);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
