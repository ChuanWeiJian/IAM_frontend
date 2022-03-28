import React from "react";
import { Breadcrumb } from "@gull";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LetterTemplates = () => {
  return (
    <div>
      <Breadcrumb routeSegments={[{ name: "Letter Templates" }]}></Breadcrumb>
      <Row className="justify-content-center">
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4 ">
          <Link to="/letter/new">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-Mail-Add-"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  New Letter Template
                </p>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4">
          <Link to="/letter/list">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-Email"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  Letter Templates List
                </p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default LetterTemplates;
