import React from 'react';
import styles from 'styled-components';

import './App.css';

export const App: React.FC = () => {
  return <Wrapper>HHH</Wrapper>;
};

const Wrapper = styles.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
`;
