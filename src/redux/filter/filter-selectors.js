import { createSelector } from '@reduxjs/toolkit';

import { selectContacts } from 'redux/contacts/contacts-selectors';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts =
      filter !== ''
        ? contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
          )
        : contacts;
    return filteredContacts;
  }
);
