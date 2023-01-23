import styled from 'styled-components';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';
import Filter from './Filter';
import { Home } from './Home';
import { Header } from './Header';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

import { Title } from './AddContactForm/AddContactForm.styled';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/contacts/contactsSelectors';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const loadingMarker = useSelector(isLoading);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/contacts"
          element={
            <ContactsContent>
              <h1>Phonebook</h1>
              <AddContactForm />
              <Filter />
              <Title>Contacts</Title>
              {loadingMarker && <KindaLoader> is updating...</KindaLoader>}
              <ListOfContacts />
            </ContactsContent>
          }
        />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
};

const ContactsContent = styled.div`
  /* margin-top: 50px; */
  margin-left: 30%;
  font-size: 20px;
  color: #010101;

  ul {
    margin: 0;
    padding: 0;
  }
`;

const KindaLoader = styled.b`
  position: absolute;
  transform: translate(110px, -31px);
`;

export { App };
