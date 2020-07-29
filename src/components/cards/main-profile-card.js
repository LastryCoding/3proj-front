import React from "react";
import Col from "react-bootstrap/Col";
import "./css/main-profile-card.css";
import { Row, Media } from "react-bootstrap";

export default function Main_Profile_Card(props) {
  return (
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="main-profile-card">
      <Row>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          <Media className="d-flex align-items-center">
            <img
              width={64}
              height={64}
              className="mr-3 profile-media-picture"
              src={props.user.imgUrl}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="badeel-blue-heading ">
                Bonjour {props.user.lastname} {props.user.name}
              </h5>
              <p>
                <span className="profile-info-data-span">
                  <span className="profile-info-span">
                    <i className="fas fa-envelope"></i> :
                  </span>{" "}
                  {props.user.email}
                </span>
                <span className="profile-info-data-span">
                  <span className="profile-info-span">
                    <i className="fas fa-map-marker-alt"></i> :
                  </span>{" "}
                  {props.user.ville}
                </span>
              </p>
            </Media.Body>
          </Media>
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          <Media className="d-flex align-items-center">
            <Media.Body>
              <h5 className="badeel-blue-heading mb-3 ">
                Entreprise : <span className="span-info-data-name">Badeel</span>
              </h5>
              <h5 className="badeel-blue-heading mb-3">
                N° Conducteur :{" "}
                <span className="span-info-data-name">B0182</span>
              </h5>
            </Media.Body>
          </Media>
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          <Media className="d-flex align-items-center">
            <Media.Body>
              <h5 className="badeel-blue-heading mb-3">
                N° Vignette :{" "}
                <span className="span-info-data-name">XXXG666999</span>
              </h5>
              <h5 className="badeel-blue-heading mb-3">
                N° Permis :{" "}
                <span className="span-info-data-name">MNEA02334</span>
              </h5>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Col>
  );
}
