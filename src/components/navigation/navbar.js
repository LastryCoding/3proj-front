import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/navbar.css";

export default (props) => {
  return (
    <Col className="main-sidenav" xl={2} lg={2} md={12} sm={12} xs={12}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <img src={`/logo.png`} width="100%" />
          <hr style={{ borderColor: "#fff" }} />
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <ul className="main-sidenav-ul">
            <li className="main-sidenav-li">
              <Link
                className="main-sidenav-i"
                to={{
                  pathname: "/",
                }}
              >
                Accueil
              </Link>
            </li>
            <li className="main-sidenav-li">
              <Link
                className="main-sidenav-i"
                to={{
                  pathname: "/profile",
                }}
              >
                Profile
              </Link>
            </li>
            <li className="main-sidenav-li">
              <Link
                className="main-sidenav-i"
                to={{
                  pathname: "/logout",
                }}
              >
                Log out
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Col>
  );
};
