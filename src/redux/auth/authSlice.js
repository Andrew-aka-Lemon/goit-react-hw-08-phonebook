import { createSlice } from '@reduxjs/toolkit';
import {
  createNewUser,
  loginUser,
  logOutUser,
  refreshUserData,
} from './authOperations';

const initialState = {
  user: { name: null, mail: null },
  token: null,
  isLogedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [createNewUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, mail: null };
      state.token = null;
      state.isLogedIn = false;
    },
    [refreshUserData.pending]() {},
  },
});
