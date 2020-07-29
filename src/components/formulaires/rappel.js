import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ValidationMsg from "./validations";
import { verifyForms } from "../../middleware/middleware";

export default function Rappel() {
  const [Errors, setErrors] = useState({});
  const [Validation, setValidation] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    let response = {};
    response = {
      rappel: document.getElementById("rappelRadio1").checked
        ? true
        : document.getElementById("rappelRadio2").checked
        ? false
        : undefined,
      typeDemande:
        document.getElementById("typeDemande").value === "..."
          ? undefined
          : document.getElementById("typeDemande").value,
      objetDemande: document.getElementById("objetDemande").value,
    };
    const { valid, listErrors } = await verifyForms(response);
    if (valid) {
      setErrors({});
      setValidation(true);
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
                Vous souhaitez disposer d’une information au sujet de nos offres
                ou d’une demande que vous nous avez transmis ? Merci de
                compléter le formulaire ci-après. Nous vous contacterons
                rapidement pour vous conseiller et vous accompagner.
              </p>
            </Col>
          </Row>
          <Row className="m-0 justify-content-center">
            <Col xl={8} lg={8} md={12} sm={12} xs={12} className="mt-5">
              <Form id="formReset" onSubmit={submitData}>
                <Col lg="12">
                  <Form.Group id="rappel">
                    <Form.Label>Je souhaite être rappelé* :</Form.Label>
                    <Form.Check
                      id="rappelRadio1"
                      name="rappel"
                      type="radio"
                      label="Non"
                      isInvalid={Object.keys(Errors).includes("rappel")}
                    ></Form.Check>
                    <Form.Check
                      id="rappelRadio2"
                      name="rappel"
                      type="radio"
                      label="Oui"
                      isInvalid={Object.keys(Errors).includes("rappel")}
                    ></Form.Check>
                  </Form.Group>
                </Col>
                <Col lg="12">
                  <Form.Group>
                    <Form.Label>Type de demande* :</Form.Label>
                    <Form.Control
                      id="typeDemande"
                      isInvalid={Object.keys(Errors).includes("typeDemande")}
                      as="select"
                    >
                      <option>...</option>
                      <option>Nouvelle demande</option>
                      <option>Demande déjà exprimée</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg="12">
                  <Form.Group>
                    <Form.Label>Objet de votre demande* :</Form.Label>
                    <Form.Control
                      id="objetDemande"
                      isInvalid={Object.keys(Errors).includes("objetDemande")}
                      as="textarea"
                      rows={4}
                      placeholder="Veuillez entrer votre demande"
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
