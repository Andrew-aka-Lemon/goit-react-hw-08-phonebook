const { useSelector } = require('react-redux');
const { Route } = require('react-router-dom');
const { selectIsLogedIn } = require('redux/auth/authSelectors');

const PrivateRoute = ({ children, ...routeProps }) => {
  const logedIn = useSelector(selectIsLogedIn);
  const shouldRedirect = !logedIn;

  // return { shouldRedirect ? <Navigate to = '/login'/> :}
};
