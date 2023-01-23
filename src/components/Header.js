import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: tomato;
  }
`;

export const Header = () => {
  return (
    <FancyHeader>
      <Links>
        <StyledLink to="/register">Registration</StyledLink>
        <StyledLink to="/login">LogIn</StyledLink>
        <StyledLink to="/contacts">MyContacts</StyledLink>
      </Links>

      <div>
        <p>Hello, Username</p>
        <button>LogOut</button>
      </div>
    </FancyHeader>
  );
};

const FancyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;
