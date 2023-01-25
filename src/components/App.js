import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute, PublickRoute } from 'components/RouterManager';
import { selectIsRefreshingUser } from 'redux/auth/authSelectors';
import { refreshUserData } from 'redux/auth/authOperations';
import { Layout } from 'pages/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const RegisterForm = lazy(() => import('pages/RegisterForm'));
const LoginForm = lazy(() => import('pages/LoginForm'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  const userRefresh = useSelector(selectIsRefreshingUser);

  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch]);

  return (
    <Layout>
      {!userRefresh ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<Contacts />} />}
            />
            <Route
              path="/login"
              element={<PublickRoute component={<LoginForm />} />}
            />
            <Route
              path="/register"
              element={<PublickRoute component={<RegisterForm />} />}
            />
          </Route>
        </Routes>
      ) : (
        <div>Loading your account data...</div>
      )}
    </Layout>
  );
};

export { App };
