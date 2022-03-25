import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import {
  Row,
  Col,
} from "react-bootstrap";

const ExamCenters = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[{ name: "Exam Centers" }]}
      ></Breadcrumb>
      <Row>
        <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
          <SimpleCard className="h-100" title="New Exam Center"></SimpleCard>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
          <SimpleCard className="h-100" title="Exam Centers List"></SimpleCard>
        </Col>
      </Row>
    </div>
  );
};

export default ExamCenters;
