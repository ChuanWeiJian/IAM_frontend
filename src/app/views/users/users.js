import React from "react";
import { Breadcrumb } from "@gull";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserManagement = () => {
  return (
    <div>
      <Breadcrumb routeSegments={[{ name: "User Management" }]}></Breadcrumb>
      <Row className="justify-content-center">
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4 ">
          <Link to="/user/new">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-Add-User"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  New Officer Account
                </p>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={3} md={3} sm={6} xs={12} className="mb-4">
          <Link to="/user/list">
            <div className="card card-icon-big mb-4">
              <div className="card-body text-center">
                <i className="i-Administrator"></i>
                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                  Officer Accounts List
                </p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserManagement;
