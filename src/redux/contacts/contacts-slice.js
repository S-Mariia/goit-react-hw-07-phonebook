import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

const extraActions = [fetchContacts, deleteContact, addContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const addContactFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(({ id }) => id !== payload.id);
};

const deleteContactFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(deleteContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer);
  },
});

export default contactsSlice.reducer;
