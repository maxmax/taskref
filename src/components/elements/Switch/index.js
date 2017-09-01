import React from 'react';

//TODO: create return update
function Switch({value}) {
  const enabled = value ? 'active' : '';
  return (
    <div className={"switch " + enabled}>
      <div>
        <span className="enabled">enabled</span>
        <span className="disable">disable</span>
      </div>
    </div>
  )
};

export default Switch;
