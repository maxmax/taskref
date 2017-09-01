import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './header';
import Aside from './aside';

//TODO: Header, Aside on router
function layout( { children } ) {
  return (
    <section className="settings-app">
      <Header />
      <Container fluid className="layout">
        <Aside />
        <Row>
          <Col xs="12">{children}</Col>
        </Row>
      </Container>
    </section>
  )
}

export default layout;
