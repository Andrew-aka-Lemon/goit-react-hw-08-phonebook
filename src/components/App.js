import styled from 'styled-components';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';
import Filter from './Filter';
import { Title } from './AddContactForm/AddContactForm.styled';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/selectors';

const App = () => {
  const loadingMarker = useSelector(isLoading);
  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <AddContactForm />
        <Filter />
        <Title>Contacts</Title>
        {loadingMarker && <KindaLoader> is updating...</KindaLoader>}
        <ListOfContacts />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
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
