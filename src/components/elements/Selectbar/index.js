import React from 'react';

//base select
function Selectbar( { term, data, update, items } ) {

  const dataSearch = e => {
    const value = e.target.value.toLowerCase();
    const filter = data.filter(inbox => {
      return inbox.text.toLowerCase().includes(value);
    });
    update({
      data: filter,
      active: 0,
      term: value
    });
  };

  const options = items.map((data, index) => {
    return (
      <option key={`item-${index}`} value={data}>{data}</option>
    );
  });

  return (
    <div className="searchbar form-group">
      <select
        value={term}
        onChange={dataSearch}
        className="form-control">
        {options}
      </select>
    </div>
  )
};

export default Selectbar;
