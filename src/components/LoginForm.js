import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import styled from 'styled-components';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const email = elements.email.value;
    const password = elements.password.value;

    const newUser = { email, password };

    dispatch(loginUser(newUser));

    e.currentTarget.reset();
  };

  return (
    <FancyForm onSubmit={submitHandler}>
      <label>
        Email
        <input name="email" type="email" autoComplete="on"></input>
      </label>

      <label>
        Password <input name="password" type="password"></input>
      </label>

      <button type="submit">Log In </button>
    </FancyForm>
  );
};

const FancyForm = styled.form`
  width: 200px;

  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
