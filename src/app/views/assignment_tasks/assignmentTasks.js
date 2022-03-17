import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import {
  Row,
  Col,
} from "react-bootstrap";

const AssignmentTasks = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[{ name: "Assignment Tasks", path: "/assignment" }]}
      ></Breadcrumb>
      <Row>
        <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
          <SimpleCard className="h-100" title="New Assignment Task"></SimpleCard>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
          <SimpleCard className="h-100" title="Assignment Tasks List"></SimpleCard>
        </Col>
      </Row>
    </div>
  );
};

export default AssignmentTasks;
