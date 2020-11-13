import React from 'react';
import styled from 'styled-components';

import {Text} from '../index';

interface SelectProps {
  data: string[];
  isVisible: boolean;
  setIsVisible(): void;
  selectedValue: string;
  onSelectChange(val: string): void;
}

export const Select: React.FC<SelectProps> = ({
  data,
  isVisible,
  setIsVisible,
  selectedValue,
  onSelectChange
}) => {
  const renderItemsList = data.map((elem, index) => (
    <SelectItem
      onClick={() => {
        onSelectChange(elem)
        setIsVisible();
      }}
      key={index}
    >
      {elem}
    </SelectItem>
  ));

  return (
    <SelectWrapper onClick={setIsVisible}>
      <Text>{selectedValue || 'Select'}</Text>
      <SelectArrow src="../../../materials/collapse-arrow.svg" />

      <SelectModal isVisible={isVisible}>{renderItemsList}</SelectModal>
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
  position: relative;
`;

const SelectArrow = styled.img`
  width: 10px;
  height: 10px;
`;

const SelectModal = styled.div`
  width: 120px;
  display: ${(props: SelectProps) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 5px;
  background-color: #f1f1f1;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const SelectItem = styled.p`
  cursor: pointer;
  font-size: 14px;
  color: #4f545d;
  margin: 0;
  padding: 5px 0;

  &:hover {
    color: #000000;
  }
`;
