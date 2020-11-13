import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <ButtonWrapper>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef6930;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
`;
