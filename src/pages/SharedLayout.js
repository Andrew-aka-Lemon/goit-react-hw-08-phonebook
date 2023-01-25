import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from 'components/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </div>
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
