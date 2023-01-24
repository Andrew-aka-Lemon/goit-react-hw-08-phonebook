import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/contacts/contactsSelectors';
import styled from 'styled-components';

const { Title } = require('components/AddContactForm/AddContactForm.styled');

export const Contacts = () => {
  const loadingMarker = useSelector(isLoading);

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      <Filter />
      <Title>Contacts</Title>
      {loadingMarker && <KindaLoader> is updating...</KindaLoader>}
      <ListOfContacts />
    </>
  );
};

const KindaLoader = styled.b`
  position: absolute;
  transform: translate(110px, -31px);
`;
