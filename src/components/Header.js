import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperations';
import { selectIsLogedIn, selectUserName } from 'redux/auth/authSelectors';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: tomato;
  }
`;

export const Header = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectUserName);

  const isLogedIn = useSelector(selectIsLogedIn);

  return (
    <FancyHeader>
      <Links>
        <StyledLink to="/register">Registration</StyledLink>
        <StyledLink to="/login">LogIn</StyledLink>
        <StyledLink to="/contacts">MyContacts</StyledLink>
      </Links>

      {isLogedIn && (
        <div>
          <h3>Hello, {username}</h3>
          <button type="button" onClick={() => dispatch(logOutUser())}>
            Log Out
          </button>
        </div>
      )}
    </FancyHeader>
  );
};

const FancyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  height: 100px;
`;

const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;
