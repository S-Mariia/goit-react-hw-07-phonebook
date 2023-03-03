import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

import { IconContext } from 'react-icons';
import { MdDelete } from 'react-icons/md';

import { Tr, Td, Btn } from './ContactItem.styled';

export const ContactItem = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{phone}</Td>
      <Td>
        <Btn onClick={() => dispatch(deleteContact(id))} type="button">
          <IconContext.Provider
            value={{
              size: 20,
            }}
          >
            <MdDelete />
          </IconContext.Provider>
        </Btn>
      </Td>
    </Tr>
  );
};
