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
  color: #4F545D;
  display: ${(props: TextProps) => props.isInline ? 'inline-block' : 'block'};
`;
