import React from 'react';
import './task3.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function SuperOverLeague() {
  return (
    <Container className="super-over-league">
      <Row>
        <Col md={12}>
          <h1  className="super" style={{ color: 'rgb(13, 236, 43)' }}>Super Over League</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="team">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
            alt="RCB Logo"
            width={200}
          />
          <p>Royal Challengers Bangalore</p>
        </Col>
        <Col md={6} className="team1">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
            alt="CSK Logo"
            width={200}
          />
          <p>Chennai Super Kings</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SuperOverLeague;
