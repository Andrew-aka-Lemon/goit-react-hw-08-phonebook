const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsLogedIn } = require('redux/auth/authSelectors');

export const PrivateRoute = ({ component: Component }) => {
  const logedIn = useSelector(selectIsLogedIn);
  const shouldRedirect = !logedIn;

  return shouldRedirect ? <Navigate to="/login" /> : Component;
};

export const PublickRoute = ({ component: Component }) => {
  const logedIn = useSelector(selectIsLogedIn);

  return logedIn ? <Navigate to="/contacts" /> : Component;
};
