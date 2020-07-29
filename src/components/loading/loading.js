import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./loading.gif";

export default function Loading() {
  return (
    <Container fluid className="loading-container">
      <Row className="loading-container d-flex align-items-center">
        <Col lg="12 p-0" style={{ textAlign: "center" }}>
          <div style={{ color: "#fff" }}>
            <img id="loading" src={Logo}></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
