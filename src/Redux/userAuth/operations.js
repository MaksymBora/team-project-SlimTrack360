import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthyhub-emsa.onrender.com/api';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const updateUserSettings = createAsyncThunk(
  'auth/update',
  async (params, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.userAuth.token;

    if (!state.userAuth.isLoggedIn) {
      return rejectWithValue('Unable to get user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.put('/user/update', params);
      console.log('data', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
