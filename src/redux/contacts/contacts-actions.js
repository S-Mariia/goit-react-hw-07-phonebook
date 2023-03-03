import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const fetchAllContactsRequest = createAction('contacts/fetch/loading');
export const fetchAllContactsSuccess = createAction('contacts/fetch/success');
export const fetchAllContactsError = createAction('contacts/fetch/error');

export const deleteContactRequest = createAction('contacts/delete/loading');
export const deleteContactSuccess = createAction('contacts/delete/success');
export const deleteContactError = createAction('contacts/delete/error');

export const addContactRequest = createAction('contacts/add/loading');
export const addContactSuccess = createAction('contacts/add/success');
export const addContactError = createAction('contacts/add/error');
