import React from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NormalDashboard = (props) => {
  return (
    <div>
      <Row>
        <Col lg={4} md={4} sm={12} xs={12} className="mb-4 ">
          <div className="card card-icon-big mb-4">
            <div className="card-body text-center">
              <h4>System Admin</h4>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="UserManagement"
              >
                <Nav variant="pills" className="d-flex  px-2">
                  <Nav.Item className="mr-2 flex-grow-1 text-center">
                    <Nav.Link eventKey="UserManagement">
                      User Management
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="UserManagement">
                    <Row className="justify-content-center">
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4 ">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-University"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              Registration of Officer
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-University1"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              Officer account management
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="mb-4">
          <div className="card card-icon-big mb-4">
            <div className="card-body text-center">
              <h4>PPD Officer</h4>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="AssignmentTaskManagement"
              >
                <Nav variant="pills" className="d-flex  px-2">
                  <Nav.Item className="mr-2 flex-grow-1 text-center">
                    <Nav.Link eventKey="AssignmentTaskManagement">
                      Assignment Task
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mr-2 flex-grow-1 text-center">
                    <Nav.Link eventKey="SchoolManagement">School</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mr-2 flex-grow-1 text-center">
                    <Nav.Link eventKey="FormalLetterManagement">
                      Formal Letter
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="AssignmentTaskManagement">
                    <Row className="justify-content-center">
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4 ">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-Add-File"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              New Assignment Task
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-File-Horizontal-Text"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              Assignment Task Management
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="SchoolManagement">
                    <Row className="justify-content-center">
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4 ">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-University"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              School & Exam Center Registration
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-University1"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              School & Exam Center Management
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="FormalLetterManagement">
                    <Row className="justify-content-center">
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4 ">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-Mail-Add-"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              New Formal Letter Template
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-Email"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              Letter Templates Management
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="mb-4">
          <div className="card card-icon-big mb-4">
            <div className="card-body text-center">
              <h4>Teacher</h4>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="InvigilatorExp"
              >
                <Nav variant="pills" className="d-flex  px-2">
                  <Nav.Item className="mr-2 flex-grow-1 text-center">
                    <Nav.Link eventKey="InvigilatorExp">
                      Invigilator Experience Result & Record
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="InvigilatorExp">
                    <Row className="justify-content-center">
                      <Col lg={6} md={6} sm={12} xs={12} className="mb-4 ">
                        <div className="card card-icon-big mb-4">
                          <div className="card-body text-center">
                            <i className="i-File"></i>
                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                              Invigilator Experience Result
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NormalDashboard;
