import React from 'react';
import styled from 'styled-components';

export const HorizontalLine: React.FC = () => {
  return <Line />;
};

const Line = styled.div`
  margin: 15px 0;
  border: 1px solid #f6f6f6;
`;
