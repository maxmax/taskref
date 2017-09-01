import React from 'react';
import { Table, FormGroup, Label, Input } from 'reactstrap';
import Tr from './tr';

//TODO: create map, active, update, Tr
function AlertsTable({option}) {
  const {data, update} = option;

  //const listItems = data.map((item) =>
  //  <Tr />
  //);

  return (
    <div className="table-wrapper alerts-table">
      <Table responsive>
        <thead>
          <tr>
            <th>
              <div className="table-form-check">EVENT</div>
            </th>
            <th>STATE</th>
            <th>NOTIFY</th>
            <th>FIRED</th>
            <th>RECEIVERS</th>
          </tr>
        </thead>
        <tbody>
          <Tr role="active" />
          <Tr />
        </tbody>
      </Table>
    </div>
  )
}

export default AlertsTable;
