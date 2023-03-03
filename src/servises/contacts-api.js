import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63ff39c9c5c800a7238e828b.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};

export const addContact = async ({ name, phone }) => {
  const { data } = await contactsInstance.post('/', { name, phone });
  console.log(data);
  return data;
};
