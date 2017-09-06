import React from 'react';
import { Card, CardBlock, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Period from '../../elements/Period';
import Switch from '../../elements/Switch';
import Range from '../../elements/Range';
import AlertsTable from './table';

//TODO: props
const Current = (props) =>
  <Card>
    <CardBlock className="auto">
      <CardTitle>Current alerts</CardTitle>
      <div className="bar">
        <Row>
          <Col xs="12" sm="5" lg="5">
            <Button color="secondary" size="sm">ENABLE</Button>
            <Button color="secondary" size="sm">DISABLE</Button>
          </Col>
          <Col xs="7" sm="4" lg="4">
            <Button color="secondary" size="sm">EDIT</Button>
            <Button color="secondary" size="sm" className="pull-right">CREATE</Button>
          </Col>
          <Col xs="5" sm="3" lg="3">
            <Button color="secondary" size="sm" className="pull-right">REMOVE</Button>
          </Col>
        </Row>
      </div>
      <Period label="Alerts count period" />
    </CardBlock>
    <AlertsTable option={props} />
  </Card>

const AlertsBox = ({title, text, data}) =>
  <Card block>
    <CardTitle>{title}</CardTitle>
    <Switch value={data.state} />
    <CardText>{text}</CardText>
    <Range
      label="Limitation per day"
      min={1}
      max={400}
      value={data.limitation}
    />
  </Card>

function Alerts({data, update, curent}) {
  const {email, sms, notifications} = data;

  console.log("curent", curent);

  return (
    <div className="alerts">
      <Row>
        <Col xs="12">
          <Current
            data={notifications}
            update={update}
          />
        </Col>
        <Col xs="12">
          <Row>
            <Col xs="12" sm="6">
              <AlertsBox
                title={'SMS alerts'}
                text={'Email gate has limited number of Emails which it can send trough the day from current domain. Please limit the number of sending Emails.'}
                data={sms}
              />
            </Col>
            <Col xs="12" sm="6">
              <AlertsBox
                title={'Email alerts'}
                text={'Email gate has limited number of Emails which it can send trough the day from current domain. Please limit the number of sending Emails.'}
                data={email}
                curent={curent}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Alerts;
