import React from 'react';
import { Card, CardBlock, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Period from '../../elements/Period';
import Switch from '../../elements/Switch';
import ReactSelect from '../../elements/ReactSelect';
import CollapseWr from '../../elements/CollapseWr';

//TODO: props
const CardForm = ({category, event, state, curentId}) =>
  <section>
    <CardTitle>Details [{category} - {event}]</CardTitle>
    <ReactSelect
      label="Event category"
      value={curentId}
    />
    <ReactSelect label="Event" />
    <div className='form-group'>
      <label>Event state</label>
      <Switch value={state} />
    </div>
    <Period label="Send notification via" />
    <br />
    <Button color="secondary" size="sm" disabled>SAVE</Button>
  </section>

const Notification = (props) =>
  <section>
    <CollapseWr title="Notification receivers (1)">
      <ul className="list-group list-group-flush notifications">
        <li className="list-group-item notification active">
          <div>Geore Cooling</div>
          <div><small>g.coo@arhitech.com</small></div>
          <div><small>+380745127612</small></div>
        </li>
        <li className="list-group-item notification">
          <div>Alan Timber</div>
          <div><small>alan-timber@arhitech.com</small></div>
          <div><small>+380644129011</small></div>
        </li>
      </ul>
    </CollapseWr>
    <CollapseWr title="Alert fire dates (3)">
      <CardBlock className="auto">
        <Period />
      </CardBlock>
      <ul className="list-group list-group-flush list-group-transp">
        <li className="list-group-item">2017-Jan-03 Tue 09:13:21</li>
        <li className="list-group-item">2017-Feb-12 Fri 12:09:54</li>
        <li className="list-group-item">2017-Feb-23 Fri 19:23:36</li>
      </ul>
      <br />
    </CollapseWr>
  </section>

function Details(props) {

  const {data} = props;

  console.log("Details:", data)

  return (
    <div className="details">
      <Card>
        <CardBlock>
          <CardForm
            curentId={data.id}
            category={data.category}
            event={data.event}
            state={data.state}
          />
        </CardBlock>
        <Notification />
      </Card>
    </div>
  )
}

export default Details;
