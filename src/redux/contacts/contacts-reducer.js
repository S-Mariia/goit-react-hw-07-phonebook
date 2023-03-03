import { createReducer } from '@reduxjs/toolkit';

import {
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contacts-actions';

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

const contactsReducer = createReducer(initialState, {
  [fetchAllContactsRequest]: fetchRequest,
  [fetchAllContactsSuccess]: (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.items = payload;
  },
  [fetchAllContactsError]: fetchWithError,

  [deleteContactRequest]: fetchRequest,
  [deleteContactSuccess]: (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(({ id }) => id !== payload.id);
  },
  [deleteContactError]: fetchWithError,

  [addContactRequest]: fetchRequest,
  [addContactSuccess]: (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(payload);
  },
  [addContactError]: fetchWithError,
});

export default contactsReducer;
