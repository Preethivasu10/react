import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function SocialButtons() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="mt-5">Social Buttons</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Button href="#" className="social-button facebook" variant="primary">
            <i className="fa fa-facebook"></i> Facebook
          </Button>
        </Col>
        <Col md={4}>
          <Button href="#" className="social-button twitter" variant="info">
            <i className="fa fa-twitter"></i> Twitter
          </Button>
        </Col>
        <Col md={4}>
          <Button href="#" className="social-button linkedin" variant="secondary">
            <i className="fa fa-linkedin"></i> LinkedIn
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
