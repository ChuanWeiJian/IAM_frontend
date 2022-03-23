import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Row, Col } from "react-bootstrap";

const LetterTemplates = () => {
  return (
    <div>
      <Breadcrumb routeSegments={[{ name: "Letter Templates" }]}></Breadcrumb>
      <Row>
        <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
          <SimpleCard
            className="h-100"
            title="New Letter Template"
          ></SimpleCard>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
          <SimpleCard
            className="h-100"
            title="Letter Templates List"
          ></SimpleCard>
        </Col>
      </Row>
    </div>
  );
};

export default LetterTemplates;
