import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { atLeastOneTrue } from "../../middleware/middleware";
import ValidationMsg from "./validations";

export default function Services() {
  const [Errors, setErrors] = useState({});
  const [Validation, setValidation] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    let response = {};
    for (let i = 0; i < new Array(16).length; i++) {
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
                      Veuillez sélectionner au moins une options parmis ces
                      choix* :
                    </Form.Label>
                    <Row>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="0"
                          type="checkbox"
                          name="accessoire"
                          label="Accessoire"
                          isInvalid={Object.keys(Errors).includes("accessoire")}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="1"
                          type="checkbox"
                          label="Assistance VIP"
                          name="assistanceVip"
                          isInvalid={Object.keys(Errors).includes(
                            "assistanceVip"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="2"
                          type="checkbox"
                          label="Chauffeur"
                          name="chauffeur"
                          isInvalid={Object.keys(Errors).includes("chauffeur")}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="3"
                          type="checkbox"
                          label="Véhicule d'attente"
                          name="vhlAttente"
                          isInvalid={Object.keys(Errors).includes("vhlAttente")}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="4"
                          type="checkbox"
                          label="Carte carburant"
                          name="carteCarburant"
                          isInvalid={Object.keys(Errors).includes(
                            "carteCarburant"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="5"
                          type="checkbox"
                          label="Carte verte"
                          name="carteVerte"
                          isInvalid={Object.keys(Errors).includes("carteVerte")}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="6"
                          type="checkbox"
                          label="Demande accès BI"
                          name="demandeBI"
                          isInvalid={Object.keys(Errors).includes("demandeBI")}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="7"
                          type="checkbox"
                          label="Demande accès Dashboard"
                          name="demandeDashboard"
                          isInvalid={Object.keys(Errors).includes(
                            "demandeDashboard"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="8"
                          type="checkbox"
                          label="Double de clé"
                          name="doubleCle"
                          isInvalid={Object.keys(Errors).includes("doubleCle")}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="9"
                          type="checkbox"
                          label="Duplicata papier"
                          name="duplicataPapier"
                          isInvalid={Object.keys(Errors).includes(
                            "duplicataPapier"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="10"
                          type="checkbox"
                          label="Formation conducteur"
                          name="formationConducteur"
                          isInvalid={Object.keys(Errors).includes(
                            "formationConducteur"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="11"
                          type="checkbox"
                          label="Lavage profond"
                          name="lavageProfond"
                          isInvalid={Object.keys(Errors).includes(
                            "lavageProfond"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="12"
                          type="checkbox"
                          label="LCD avec ou sans chauffeur"
                          name="lcdChauffeur"
                          isInvalid={Object.keys(Errors).includes(
                            "lcdChauffeur"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="13"
                          type="checkbox"
                          label="Prolongement de véhicule de remplacement"
                          name="prolongementVhl"
                          isInvalid={Object.keys(Errors).includes(
                            "prolongementVhl"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="14"
                          type="checkbox"
                          label="Retrait de la fourrière"
                          name="retraitFourriere"
                          isInvalid={Object.keys(Errors).includes(
                            "retraitFourriere"
                          )}
                        ></Form.Check>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
                        <Form.Check
                          id="15"
                          type="checkbox"
                          label="Wasseel"
                          name="wasseel"
                          isInvalid={Object.keys(Errors).includes("wasseel")}
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
