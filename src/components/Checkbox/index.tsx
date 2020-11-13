import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {Text} from '../index';

interface CheckboxProps {
  text: string;
  selectedRole: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({text, selectedRole}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    switch (selectedRole) {
      case 'Admin': 
        setIsSelected(true);
        break;
      case 'Member':
        setIsSelected(text === 'View' || text === 'Share');
        break;
      case 'User':
        setIsSelected(text === 'Move' || text === 'Delete');
        break;
      default:
        selectedRole && setIsSelected(false);
    }
  }, [selectedRole]);
  
  const onCheckboxClick = () => {
    if (selectedRole === 'Custom') {
      setIsSelected(!isSelected);
    }
  };

  return (
    <CheckboxWrapper selectedRole={selectedRole} onClick={onCheckboxClick}>
      <CheckboxIcon
        src={isSelected ? '../../../materials/check.svg' : '../../../materials/uncheck.svg'}
      />
      <Text>{text}</Text>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${(props: CheckboxProps) => (props.selectedRole === 'Custom' ? 'pointer' : 'default')};
  margin-right: 20px;
  opacity: ${(props: CheckboxProps) => (props.selectedRole === 'Custom' ? '1' : '0.5')};
`;

const CheckboxIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
