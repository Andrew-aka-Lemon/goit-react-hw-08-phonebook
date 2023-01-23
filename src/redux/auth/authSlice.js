import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, mail: null },
  token: null,
  isLogedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auht',
  initialState,
  extraReducers: {},
});
