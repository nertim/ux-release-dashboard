import React, { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Dashboard from './Dashboard/Dashboard';

const App: FC = () => {
  return (
    <>
      <Menu fixed="top">
        <Container>
          <Menu.Item as="a" href="#" link header>
            UX Versions
          </Menu.Item>
          <Menu.Item as="a">Dashboard</Menu.Item>
        </Container>
      </Menu>
      <Container style={{ marginTop: '7em' }} fluid>
        <Dashboard />
      </Container>
    </>
  );
};

export default App;
