import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const waterDb = axios.create({
  baseURL: 'https://healthyhub-emsa.onrender.com/api',
  headers: { accept: 'application/json' },
});

// axios.defaults.baseURL = 'https://healthyhub-emsa.onrender.com/api';

// export const setAuthHeader = () => {
//   axios.defaults.headers.common.Authorization =
//     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I3OTkzY2UwZDI2ODFiY2NkYjM4ZiIsImlhdCI6MTcwMjgxOTk3MywiZXhwIjoyMDE4Mzk1OTczfQ.jlPHMm1Un20iMulopfXbbfaMwtsvSAlpln-WsPCszbU';
// };

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I3OTkzY2UwZDI2ODFiY2NkYjM4ZiIsImlhdCI6MTcwMjgxOTk3MywiZXhwIjoyMDE4Mzk1OTczfQ.jlPHMm1Un20iMulopfXbbfaMwtsvSAlpln-WsPCszbU',
  },
};

export const addWater = createAsyncThunk(
  'waterIntake/post',
  async (data, thunkAPI) => {
    try {
      const response = await waterDb.post('/user/water-intake', data, options);
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
      const response = await waterDb.delete(
        `user/water-intake?date=${date}&value=0`,
        {
          headers: options.headers,
        }
      );
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
      const response = await waterDb.post(
        '/user/water-intake',
        dateToday,
        options
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
