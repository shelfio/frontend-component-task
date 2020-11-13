import React from 'react';
import styled from 'styled-components';

import {Text} from '../index';

interface CheckboxProps {
  text: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ text }) => {
  return (
    <CheckboxWrapper>
      <CheckboxIcon src="../../../materials/uncheck.svg" />
      <Text>{text}</Text>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
`;

const CheckboxIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
