import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const fetchRequest = state => {
  state.isLoading = true;
};
const fetchWithError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: fetchRequest,
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: fetchWithError,
    [deleteContact.pending]: fetchRequest,
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== payload.id);
    },
    [deleteContact.rejected]: fetchWithError,
    [addContact.pending]: fetchRequest,
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected]: fetchWithError,
  },
});

export default contactsSlice.reducer;
