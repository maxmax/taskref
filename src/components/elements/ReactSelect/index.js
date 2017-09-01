import React, { Component } from 'react'
import Select from 'react-select';

//TODO: in dev
function ReactSelect({label}) {

  var options = [
    { value: 'one', label: 'Signaling channels' },
    { value: 'two', label: 'Storage' },
    { value: 'three', label: 'Data channels' }
  ];

  const logChange = val => {
    //console.log("logChange!");
    console.log("Selected: " + JSON.stringify(val));
  }

  return (
    <div className='react-select form-group'>
      <label>{label}</label>
      <Select
        name="form-field-name"
        value="one"
        options={options}
        onChange={logChange}
      />
    </div>
  )
};

export default ReactSelect;
