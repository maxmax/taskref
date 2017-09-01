import React from 'react';

function Jumbotron( { children } ) {
  return (
    <section className="jumbotron jumbotron-fluid">
      {children}
    </section>
  )
}

export default Jumbotron;
