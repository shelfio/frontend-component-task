import React, {useState} from 'react';
import styles from 'styled-components';

import {Form, Select, Text, Checkbox, HorizontalLine, Button} from './components';
import {selectData, checkboxesData} from './assets';

import './App.css';

export const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const renderCheckboxes = checkboxesData.map((elem, index) => (
    <Checkbox
      text={elem}
      selectedRole={selectedRole}
      key={index}
    />
  ));

  return (
    <Wrapper
      onClick={() => {
        if (isModalVisible) {
          setIsModalVisible(false);
        }
      }}
    >
      <Form>
        <Text isInline={true}>User role</Text>
        <Select
          isVisible={isModalVisible}
          setIsVisible={() => {
              setIsModalVisible(!isModalVisible);
          }}
          onSelectChange={(selected) => {
            setSelectedRole(selected);
            setShowResult(false);
          }}
          data={selectData}
          selectedValue={selectedRole}
        />

        <Text>Folders</Text>
        {renderCheckboxes}

        <HorizontalLine />

        <Text>Gems</Text>
        {renderCheckboxes}
      </Form>

      <Button text="save" onClick={() => selectedRole && setShowResult(true)} />
      {showResult && (
          <Text isInline={true}>Selected role: {selectedRole}</Text>
      )}
    </Wrapper>
  );
};

const Wrapper = styles.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
`;
