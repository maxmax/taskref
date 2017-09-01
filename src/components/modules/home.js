import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import Jumbotron from '../elements/Jumbotron';

//test
function Home() {
  return (
    <section>
      <Jumbotron>
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style...</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content</p>
          <p className="lead">
            <Button
              outline
              color="primary"
            >
              Learn more
            </Button>
          </p>
        </div>
      </Jumbotron>
    </section>
  )
}

export default Home;
