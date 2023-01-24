import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createNewUser = createAsyncThunk(
  'auth/createNewUser',
  async (userRegisterData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userRegisterData);
      console.log(data);

      axios.defaults.headers.common['Authorization'] = data.token;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userLoginData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', userLoginData);

      axios.defaults.headers.common['Authorization'] = data.token;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      axios.defaults.headers.common['Authorization'] = '';
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
