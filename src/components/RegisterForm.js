import { useState } from 'react';
import styled from 'styled-components';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    setName(elements.name);
    console.log(elements.name);
  };
  return (
    <FancyForm onSubmit={submitHandler}>
      <label>
        Name
        <input name="name" type="text"></input>
      </label>
      <label>
        Email <input name="email" type="email"></input>
      </label>

      <label>
        Password <input name="password"></input>
      </label>

      <button type="submit"> Register me !</button>
    </FancyForm>
  );
};

const FancyForm = styled.form`
  width: 200px;

  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
