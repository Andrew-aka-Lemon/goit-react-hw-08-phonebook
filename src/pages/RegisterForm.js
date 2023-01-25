import { useDispatch } from 'react-redux';
import { createNewUser } from 'redux/auth/authOperations';
import styled from 'styled-components';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const name = elements.name.value;
    const email = elements.email.value;
    const password = elements.password.value;

    const newUser = { name, email, password };

    dispatch(createNewUser(newUser));

    e.currentTarget.reset();
  };

  return (
    <FancyForm onSubmit={submitHandler}>
      <label>
        Name
        <input name="name" type="text" autoComplete="on"></input>
      </label>
      <label>
        Email <input name="email" type="email" autoComplete="on"></input>
      </label>

      <label>
        Password <input name="password" type="password"></input>
      </label>

      <button type="submit"> Register me </button>
    </FancyForm>
  );
};

const FancyForm = styled.form`
  width: 200px;

  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export default RegisterForm;
