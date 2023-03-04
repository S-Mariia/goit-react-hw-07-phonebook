import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Table } from './ContactList.styled';

import {
  selectIsLoading,
  selectWithError,
} from 'redux/contacts/contacts-selectors';
import { selectFilteredContacts } from 'redux/filter/filter-selectors';

import { fetchContacts } from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectWithError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error !== null && <p>{error}</p>}

      <Table>
        <tbody>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} item={contact} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
