import styled from 'styled-components';

export const LoginForm = () => {
  return (
    <FancyForm>
      <label>
        Email
        <input name="email"></input>
      </label>

      <label>
        Password <input name="password"></input>
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
