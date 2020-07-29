import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Col from "react-bootstrap/Col";
import Main_Profile_Card from "../components/cards/main-profile-card";
import { Container, Row, Card, Button } from "react-bootstrap";

export default function Home() {
  const [User, setUser] = useState({});
  const { userData } = useContext(UserContext);
  useEffect(() => {
    if (userData.user !== undefined) {
      setUser({ ...userData.user });
    }
  }, [userData]);

  return (
    <Col xl={10} lg={10} md={12} sm={12} xs={12} className="p-0">
      <Container fluid className="p-0">
        <Row className="m-0">
          <Main_Profile_Card user={User} />
        </Row>
        <Row className="m-0 justify-content-center">
          <Col xl={4} lg={4} md={12} sm={12} xs={12} className="mt-5">
            <Card>
              <Card.Img variant="top" src="/card.svg" />
            </Card>
          </Col>
        </Row>
        <Row className="m-0 justify-content-center mt-5">
          <Link
            to={{
              pathname: "/formulaires/sinistres",
            }}
          >
            <Button variant="info" className="m-2">
              Déclarer un sinistre
            </Button>
          </Link>
          <Link
            to={{
              pathname: "formulaires/services",
            }}
          >
            <Button variant="info" className="m-2">
              Demander un service
            </Button>
          </Link>
          <Link
            to={{
              pathname: "formulaires/rappel",
            }}
          >
            <Button variant="info" className="m-2">
              Etre appelé
            </Button>
          </Link>
          <Link
            to={{
              pathname: "formulaires/reparations",
            }}
          >
            <Button variant="info" className="m-2">
              Demande une réparation
            </Button>
          </Link>
          <Link
            to={{
              pathname: "formulaires/reclamations",
            }}
          >
            <Button variant="info" className="m-2">
              Faire une réclamation
            </Button>
          </Link>
        </Row>
      </Container>
    </Col>
  );
}
