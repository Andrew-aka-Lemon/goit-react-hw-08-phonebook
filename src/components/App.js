import styled from 'styled-components';

import { Home } from './Home';
import { Header } from './Header';
import { RegisterForm } from 'pages/RegisterForm';
import { LoginForm } from 'pages/LoginForm';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshingUser } from 'redux/auth/authSelectors';
import { Contacts } from 'pages/Contacts';
import { PrivateRoute } from 'RouterManager';

const App = () => {
  const dispatch = useDispatch();

  const userRefresh = useSelector(selectIsRefreshingUser);

  // useEffect(() => {
  //   dispatch(refreshUserData());
  // }, [dispatch]);

  return (
    <>
      <Header />
      <Wrapper>
        {!userRefresh ? (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/contacts"
              element={<PrivateRoute component={<Contacts />} />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        ) : (
          <div>Loading your account data...</div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-left: 30%;
  font-size: 20px;
  color: #010101;

  ul {
    margin: 0;
    padding: 0;
  }
`;

export { App };
