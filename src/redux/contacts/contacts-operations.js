import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../servises/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await api.getAllContacts();
      return contacts;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const deletedContact = await api.deleteContact(contactId);
      return deletedContact;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const newContact = await api.addContact(data);
      return newContact;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
