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
import * as api from '../../servises/contacts-api';

export const fetchAllContacts = () => async dispatch => {
  try {
    dispatch(fetchAllContactsRequest());

    const contacts = await api.getAllContacts();
    dispatch(fetchAllContactsSuccess(contacts));
  } catch (e) {
    dispatch(fetchAllContactsError(e.message));
  }
};

export const deleteContact = contactId => async dispatch => {
  try {
    dispatch(deleteContactRequest());

    const deletedContact = await api.deleteContact(contactId);
    dispatch(deleteContactSuccess(deletedContact));
  } catch (e) {
    dispatch(deleteContactError(e.message));
  }
};

export const addContact = data => async dispatch => {
  try {
    dispatch(addContactRequest());

    const newContact = await api.addContact(data);
    dispatch(addContactSuccess(newContact));
  } catch (e) {
    dispatch(addContactError(e.message));
  }
};
