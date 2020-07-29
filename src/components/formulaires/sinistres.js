import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { verifyForms } from "../../middleware/middleware";
import ValidationMsg from "./validations";

export default function Sinistres() {
  const [Errors, setErrors] = useState({});
  const [Validation, setValidation] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    let response = {};
    response = {
      immobilisation: document.getElementById("immobilisationRadio1").checked
        ? true
        : document.getElementById("immobilisationRadio2").checked
        ? false
        : undefined,
      objet: document.getElementById("objet").value,
      description: document.getElementById("description").value,
    };
    const { valid, listErrors } = await verifyForms(response);
    if (valid) {
      setErrors({});
      setValidation(true);
      console.log("Valid");
    } else {
      setErrors(listErrors);
    }
  };

  const retour = () => {
    setValidation(false);
  };

  if (Validation) {
    return <ValidationMsg retour={retour} />;
  } else {
    return (
      <Col xl={10} lg={10} md={12} sm={12} xs={12} className="p-0">
        <Container fluid className="p-0">
          <Row className="m-0 justify-content-center">
            <Col xl={8} lg={8} md={12} sm={12} xs={12} className="mt-5">
              <p>
                Vous souhaitez déclarer un sinistre ? Merci de compléter le
                formulaire ci-après. Nous vous contacterons rapidement pour vous
                conseiller et vous accompagner.
              </p>
            </Col>
          </Row>
          <Row className="m-0 justify-content-center">
            <Col xl={8} lg={8} md={12} sm={12} xs={12} className="mt-5">
              <Form id="formReset" onSubmit={submitData}>
                <Col lg="12">
                  <Form.Group id="immobilisation">
                    <Form.Label>
                      Votre sinistre implique-t-il une immobilisation de votre
                      véhicule ?*
                    </Form.Label>
                    <Form.Check
                      id="immobilisationRadio1"
                      name="immobilisation"
                      type="radio"
                      label="Non"
                      isInvalid={Object.keys(Errors).includes("immobilisation")}
                    ></Form.Check>
                    <Form.Check
                      id="immobilisationRadio2"
                      name="immobilisation"
                      type="radio"
                      label="Oui"
                      isInvalid={Object.keys(Errors).includes("immobilisation")}
                    ></Form.Check>
                  </Form.Group>
                </Col>
                <Col lg="12">
                  <Form.Group>
                    <Form.Label>Objet du sinistre* :</Form.Label>
                    <Form.Control
                      id="objet"
                      isInvalid={Object.keys(Errors).includes("objet")}
                      type="text"
                      placeholder="Objet du sinistre"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col lg="12">
                  <Form.Group>
                    <Form.Label>Description du sinistre* :</Form.Label>
                    <Form.Control
                      id="description"
                      isInvalid={Object.keys(Errors).includes("description")}
                      as="textarea"
                      rows={4}
                      placeholder="Veuillez entrer la description du sinistre"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col lg="12">
                  <Button type="submit" variant="info" className="float-right">
                    <i className="fas fa-save"></i> Enregistrer
                  </Button>
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}
