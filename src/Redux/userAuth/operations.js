import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// axios.defaults.baseURL = 'https://healthyhub-emsa.onrender.com/api/';
axios.defaults.baseURL = 'http://localhost:3000/api/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signin', credentials);

      setAuthHeader(res.data.token);
      toast.success('Successful login');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(toast.error(error.message));
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const localStoreToken = state.userAuth.token;

    if (localStoreToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(localStoreToken);
      const response = await axios.get('/user/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/forgot-password', credentials);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserParams = createAsyncThunk(
  'auth/updateUserParams',
  async ({ values, newAvatar }, thunkAPI) => {
    try {
      const formData = new FormData();

      formData.append('name', values?.name);
      formData.append('age', values?.age);
      formData.append('sex', values?.sex);
      formData.append('height', values?.height);
      formData.append('currentWeight', values?.currentWeight);
      formData.append('levelActivity', Number(values?.levelActivity));

      if (newAvatar) {
        formData.append('avatar', newAvatar);
      }

      const { data } = await axios.put('/user/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWeight = createAsyncThunk(
  'auth/updateWeight',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('user/weight', credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserGoal = createAsyncThunk(
  'auth/updateUserGoal',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.put('user/goal', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyUser = createAsyncThunk(
  'auth/verifyUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`auth/verify/${credentials}`);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
