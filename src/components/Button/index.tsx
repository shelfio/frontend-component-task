import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick(): void;
}

export const Button: React.FC<ButtonProps> = ({text, onClick}) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 150px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ef6930;
  cursor: pointer;
  margin-right: 20px;
`;

const ButtonText = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
`;
