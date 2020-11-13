import React from 'react';
import styled from 'styled-components';

import {Text} from '../index';
// import arrow from '../../../materials/collapse-arrow.svg'

export const Select: React.FC = () => {
  return (
    <SelectWrapper>
      <Text>View-only</Text>
      <SelectArrow src="../../../materials/collapse-arrow.svg" />
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  width: 120px;
  height: 30px;
  box-sizing: border-box;
  padding: 7px;
  border: 2px solid #eeeeee;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
`;

const SelectArrow = styled.img`
  width: 10px;
  height: 10px;
`;
