import React from 'react';
import { Card, CardBlock, Button, CardTitle, CardText, Row, Col, Label, FormGroup, Input, FormFeedback } from 'reactstrap';
import ReactSelectContainer from '../elements/ReactSelect/container';
import Switch from '../elements/Switch';
import Range from '../elements/Range';
import CollapseWr from '../elements/CollapseWr';

const selectCategory = [
  { value: 0, label: 'Signaling channels' },
  { value: 1, label: 'Storage' },
  { value: 2, label: 'Data channels' }
];

const selectEvents = [
  { value: 0, label: 'Limit reached' },
  { value: 1, label: 'Used over' },
  { value: 2, label: 'No free channels' }
];

const InputForm = ({color = '', feedback, disabled}) =>
  <section>
    <FormGroup color={color}>
      <Label for="exampleNameTest">Input label</Label>
      <Input type="text" name="text" id="exampleNameTest" placeholder="Enter text" disabled={disabled} />
      {feedback && <FormFeedback>{feedback}</FormFeedback> }
    </FormGroup>
  </section>

//const SelectForm = ({option}) =>
//  <section>
//    <ReactSelectContainer
//      label="Event category"
//      value={0}
//      option={option}
//    />
//  </section>

//test
function Ui() {

  return (
    <section>
      <Card>
        <CardBlock>

          <h3>Input</h3>

          <InputForm />
          <InputForm
            color="danger"
            feedback="Oh noes! that text is already taken"
          />
          <InputForm color="success" />

          <InputForm disabled/>

          <h3>Select</h3>
          <ReactSelectContainer
            label="Event category"
            value={0}
            option={selectCategory}
          />
          <ReactSelectContainer
            label="Event"
            value={1}
            option={selectEvents}
          />
          <ReactSelectContainer
            label="Select disabled"
            value={1}
            option={selectEvents}
            disabled
          />
          <ReactSelectContainer
            label="Empty"
          />

          <h3>Switch</h3>

          <div className='form-group'>
            <label>Event state</label>
            <Switch value={false} />
          </div>

          <Switch value={true} />

          <br />

          <h3>Range</h3>

          <Range
            label="Limitation per day"
            min={1}
            max={400}
            value={120}
          />

          <Range
            label="Limitation per day"
            min={5}
            max={200}
            value={150}
          />

        </CardBlock>

        <CardBlock>
          <h3>Collapse</h3>
        </CardBlock>

        <CollapseWr title="Collapse">
          <ul className="list-group list-group-flush list-group-transp">
            <li className="list-group-item">2017-Jan-03 Tue 09:13:21</li>
            <li className="list-group-item">2017-Feb-12 Fri 12:09:54</li>
            <li className="list-group-item">2017-Feb-23 Fri 19:23:36</li>
          </ul>
        </CollapseWr>

        <CollapseWr title="Title Collapse">
          <CardBlock>
            <p>Text...</p>
          </CardBlock>
        </CollapseWr>

      </Card>
    </section>
  )
}

export default Ui;
