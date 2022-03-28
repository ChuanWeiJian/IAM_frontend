import React from "react";
import { Breadcrumb } from "@gull";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AssignmentTasks = () => {
  return (
    <div>
      <Breadcrumb routeSegments={[{ name: "Assignment Tasks" }]}></Breadcrumb>
      <Row className="justify-content-center">
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4 ">
          <Link to="/assignment/new">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-Add-File"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  New Assignment Task
                </p>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4">
          <Link to="/assignment/list">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-File-Horizontal-Text"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  Assignment Tasks List
                </p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AssignmentTasks;
