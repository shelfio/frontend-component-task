import React from 'react';
import styled from 'styled-components';

import {Text} from '../index';

export const Checkbox: React.FC = () => {
  return (
    <CheckboxWrapper>
      <CheckboxIcon src="../../../materials/uncheck.svg" />
      <Text>Create</Text>
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
