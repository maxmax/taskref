import React from 'react';

const Tr = ({role = '', }) =>
  <tr className={role}>
    <td>
      <div className={"table-form-check " + role}>
        <div>Signaling channels</div>
        <small>Limit reached</small>
      </div>
    </td>
    <td>Enabled</td>
    <td>SMS</td>
    <td>3</td>
    <td>1</td>
  </tr>;

export default Tr;
