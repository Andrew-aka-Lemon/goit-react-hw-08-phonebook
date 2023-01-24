import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filter/filerSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
});
