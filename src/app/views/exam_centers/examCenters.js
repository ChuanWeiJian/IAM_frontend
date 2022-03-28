import React from "react";
import { Breadcrumb } from "@gull";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExamCenters = () => {
  return (
    <div>
      <Breadcrumb routeSegments={[{ name: "Exam Centers" }]}></Breadcrumb>
      <Row className="justify-content-center">
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4 ">
          <Link to="/examcenter/new">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-University"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  New Exam Center
                </p>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4">
          <Link to="/examcenter/list">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-University1"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  Exam Centers List
                </p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ExamCenters;
