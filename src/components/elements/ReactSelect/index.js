import React, { Component } from 'react'
import Select from 'react-select';

//TODO: in dev, on Higher-order
function ReactSelect({label, value, options}) {

  const logChange = val => {
    console.log("Selected: " + JSON.stringify(val));
  }

  return (
    <div className='react-select form-group'>
      <label>{label}</label>
      <Select
        name="form-field-name"
        value={'0'}
        options={options}
        onChange={logChange}
      />
    </div>
  )
};

export default ReactSelect;
