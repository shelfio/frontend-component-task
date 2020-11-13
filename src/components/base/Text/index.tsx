import React from 'react';
import styled from 'styled-components';

interface TextProps {
  isInline?: boolean;
}

export const Text: React.FC<TextProps> = ({isInline, children}) => {
  return <TextWrapper isInline={isInline}>{...children}</TextWrapper>;
};

const TextWrapper = styled.p`
  font-size: 14px;
  color: #4f545d;
  margin: 10px 0;
  display: ${(props: TextProps) => (props.isInline ? 'inline-block' : 'block')};
`;
