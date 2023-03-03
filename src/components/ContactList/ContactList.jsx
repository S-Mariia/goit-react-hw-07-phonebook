import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Table } from './ContactList.styled';

import {
  selectFilteredContacts,
  selectIsLoading,
  selectWithError,
} from 'redux/contacts/contacts-selectors';

import { fetchAllContacts } from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectWithError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error !== null && <p>{error}</p>}
      {filteredContacts.length > 0 && (
        <Table>
          <tbody>
            {filteredContacts.map(contact => (
              <ContactItem key={contact.id} item={contact} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
