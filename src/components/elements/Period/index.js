import React from 'react';

//TODO: map, active, label
function Period( { label } ) {
  return (
    <div className="period">
      {label ? <label>{label}</label> : ''}
      <span>
        <span>DAY</span>
        <span className="active">WEEK</span>
        <span>MONTH</span>
      </span>
    </div>
  )
};

export default Period;
