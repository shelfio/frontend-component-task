import React from 'react';
import styled from 'styled-components';

interface TextProps {
  isInline?: boolean;
}

export const Text: React.FC<TextProps> = ({ isInline, children }) => {
  return <TextWrapper isInline={isInline}>{...children}</TextWrapper>;
}; 

const TextWrapper = styled.p`
  font-size: 16px;
  color: #9c9fa4;
  display: ${(props: TextProps) => props.isInline ? 'inline-block' : 'block'};
`;
