import React from 'react';
import styles from 'styled-components';

import {Form, Select, Text, Checkbox, HorizontalLine, Button} from './components';

import './App.css';

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Form>
        <Text isInline={true}>User role</Text>
        <Select />

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

      <Button text='save' />
    </Wrapper>
  );
};

const Wrapper = styles.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
`;
