import React from 'react';
import { Card, CardBlock, Button, CardTitle, CardText, Row, Col, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import Period from '../../elements/Period';
import Switch from '../../elements/Switch';
import ReactSelect from '../../elements/ReactSelect';
import CollapseWr from '../../elements/CollapseWr';

//TODO: props
const CardForm = (props) =>
  <section>
    <FormGroup color="danger">
      <Label for="exampleName">Name</Label>
      <Input type="text" name="name" id="exampleName" placeholder="Enter receiver name" />
      <FormFeedback>Oh noes! that name is already taken</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Email address</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Enter receiver Email address" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleTel">Phone number</Label>
      <Input type="tel" name="email" id="exampleTel" placeholder="+390612120918" />
    </FormGroup>
    <Button color="secondary" size="sm" disabled>ADD RECEIVER</Button>
    <span className="valid-status">Validating…</span>
  </section>

const Receiver = (props) =>
  <div className="details">
    <Card>
      <CardBlock>
        <CardTitle>Notification receiver</CardTitle>
        <CardForm />
      </CardBlock>
    </Card>
  </div>;

export default Receiver;
