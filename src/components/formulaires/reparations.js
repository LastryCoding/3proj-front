import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { atLeastOneTrue } from "../../middleware/middleware";
import ValidationMsg from "./validations";

export default function Reparations() {
  const [Errors, setErrors] = useState({});
  const [Validation, setValidation] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    let response = {};
    for (let i = 0; i < new Array(9).length; i++) {
      response[document.getElementById(i).name] = document.getElementById(
        i
      ).checked;
    }
    const { valid, listErrors } = await atLeastOneTrue(response);
    if (valid) {
      setErrors({});
      setValidation(true);
    } else {
      setErrors({ msg: listErrors });
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
                Vous souhaitez disposer d’un service complémentaire à votre
                contrat L.L.D. ? Merci de compléter le formulaire ci-après. Nous
                vous contacterons rapidement pour vous transmettre notre offre,
                vous conseiller et vous accompagner.
              </p>
            </Col>
          </Row>
          <Row className="m-0 justify-content-center">
            <Col xl={8} lg={8} md={12} sm={12} xs={12} className="mt-5">
              <Form id="formReset" onSubmit={submitData}>
                <Col lg="12">
                  <Form.Group>
                    <Form.Label>
                      Merci de sélectionner le type de réparation souhaité* :
                    </Form.Label>
                    <Row>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="0"
                          type="checkbox"
                          label="Carrosserie"
                          name="carrosserie"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="1"
                          type="checkbox"
                          label="Panne mécanique"
                          name="panneMecanique"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="2"
                          type="checkbox"
                          label="Bris de glace"
                          name="brisGlace"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="3"
                          type="checkbox"
                          label="Utilisation d'un mauvais carburant"
                          name="utilisationCarburant"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="4"
                          type="checkbox"
                          label="Double crevaison"
                          name="doubleCrevaison"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="5"
                          type="checkbox"
                          label="Eclatement de pneu"
                          name="eclatementPneu"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="6"
                          type="checkbox"
                          label="Incendie"
                          name="incendie"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="7"
                          type="checkbox"
                          label="Inondation"
                          name="inondation"
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="8"
                          type="checkbox"
                          label="Evénement climatique"
                          name="evenementClimatique"
                        ></Form.Check>
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
                {Object.keys(Errors).length > 0 ? (
                  <Row className="m-0 justify-content-center">
                    <Col xl={6} lg={6} md={8} sm={8} xs={8} className="mt-2">
                      <p style={{ color: "red" }}>{Errors.msg}</p>
                    </Col>
                  </Row>
                ) : null}
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
