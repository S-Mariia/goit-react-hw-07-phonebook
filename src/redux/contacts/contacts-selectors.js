export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = state => {
  const normalizedFilter = state.filter.toLowerCase();
  const filteredContacts =
    state.filter !== ''
      ? state.contacts.items.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        )
      : state.contacts.items;
  return filteredContacts;
};

export const selectIsLoading = state => state.contacts.isLoading;

export const selectWithError = state => state.contacts.error;
