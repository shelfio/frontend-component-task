import React from 'react';
import styled from 'styled-components';

export const Form: React.FC = ({ children }) => {
  return <FormWrapper>{...children}</FormWrapper>;
};

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 40px;
`;
