import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFoodIntake = createAsyncThunk(
  'foodIntake/fetch',
  async (credential, thunkAPI) => {
    try {
      const response = await axios.post('/user/food-intake', credential);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFoodIntake = createAsyncThunk(
  'foodIntake/post',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/user/food-intake', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFoodIntake = createAsyncThunk(
  'foodIntake/update',
  async ({ objectId, updateDataForBackend }, thunkAPI) => {
    try {
      const response = await axios.put(
        `/user/food-intake/${objectId}`,
        updateDataForBackend
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFoodIntake = createAsyncThunk(
  'foodIntake/delete',
  async (credentials, thunkAPI) => {
    console.log('Credentials', credentials);

    try {
      const response = await axios.delete(`/user/food-intake`, {
        data: credentials,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
