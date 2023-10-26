import React, { useState } from 'react';
import { Image, Button, Container, Row, Col } from 'react-bootstrap';
import  './task9.css'


function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const reset = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <Container className="bg-info vh-100 d-flex flex-column justify-content-center align-items-center custom-container">
      <h1>Preethi ate {count1} bananas and {count2} grapes</h1>
      <Row>
        <Col>
          <Image
            src="https://illustoon.com/photo/thum/2602.png"
            alt="Banana"
            width={200}
          />
        </Col>
        <Col>
          <Image
            src="https://static.vecteezy.com/system/resources/previews/010/525/898/original/purple-grapes-isolated-on-white-background-bunch-of-purple-grapes-with-stem-and-leaf-cartoon-style-illustration-for-any-design-vector.jpg"
            alt="Grapes"
            width={200}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={increment1} variant="warning">AddBananas</Button>
        </Col>
        <Col>
          <Button onClick={increment2} variant="success">Add Grapes</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center m-3">
          <Button onClick={reset} variant="danger">Reset</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
