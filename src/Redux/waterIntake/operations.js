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
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('/user/water-intake', {
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
      const response = await axios.post('user/water-intake', {
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
  async (dateToday, thunkAPI) => {
    try {
      const response = await waterDb.post(
        '/user/water-intake',
        dateToday,
        options
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
