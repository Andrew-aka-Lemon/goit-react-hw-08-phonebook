import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filter/filerSlice';
import { contactsSlice } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
