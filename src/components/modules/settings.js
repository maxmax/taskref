import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SettingsLayout from '../layout/admin';
import PageHeader from '../elements/pageHeader';
import Alerts from './settings/alerts';
import Details from './settings/details';
import Receiver from './settings/receiver';
import { TodoList } from '../containers/todo';

function Settings({data, update}) {
  return (
    <SettingsLayout>
      <PageHeader title="Alerts & Notifications" />
      <Row>
        <Col xs="12" sm="12" lg="6">
          <Alerts
            data={data}
            update={update}
          />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Details />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Receiver />
          <TodoList />
        </Col>
      </Row>
    </SettingsLayout>
  )
}

export default Settings;
