import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Menu() {
  return (
    <Container className="preethi bg-danger">
    <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
    <Nav.Link href="/home">home</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
      <Nav.Link href="/task2">congrats</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="/task3">SuperOverLeague</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
    <Nav.Link href="/task4">SocialButtons</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
    <Nav.Link href="/task5">Notification</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
    <Nav.Link href="/task6">LoginForm</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
    <Nav.Link href="/task9">furits</Nav.Link>
         </Nav.Item>
  </Nav>
  </Container>
  );
}
            
            


