import React, {useState} from 'react';
import styles from 'styled-components';

import {Form, Select, Text, Checkbox, HorizontalLine, Button} from './components';
import {selectData, checkboxesData} from './assets';

import './App.css';

export const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedCase, setSelectedCase] = useState<string>('');

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
          setIsVisible={() => setIsModalVisible(!isModalVisible)}
          onSelectChange={(selected) => setSelectedCase(selected)}
          data={selectData}
          selectedValue={selectedCase}
        />

        <Text>Folders</Text>
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />

        <HorizontalLine />

        <Text>Gems</Text>
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </Form>

      <Button text="save" />
    </Wrapper>
  );
};

const Wrapper = styles.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
`;
