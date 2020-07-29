import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Validation(props) {
  return (
    <Col xl={10} lg={10} md={12} sm={12} xs={12} className="p-0">
      <Container fluid className="p-0">
        <Row className="m-0 justify-content-center mt-5">
          <Col xl={10} lg={10} md={12} sm={12} xs={12} className="p-0 mt-4">
            <p>
              Votre demande a bien été enregistrée. Nous revenons vers vous
              sous-peu. Merci de votre confiance.
            </p>
          </Col>
          <Col xl={10} lg={10} md={12} sm={12} xs={12} className="p-0">
            <Button
              onClick={() => props.retour()}
              variant="info"
              className="float-right mt-4"
            >
              <i className="fas fa-arrow-left"></i> Retour
            </Button>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
