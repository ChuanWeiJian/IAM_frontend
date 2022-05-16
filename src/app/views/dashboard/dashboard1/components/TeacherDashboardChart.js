import React from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { SimpleCard } from "@gull";
import ReactEcharts from "echarts-for-react";
import Chart from "react-apexcharts";

const TeacherDashboardChart = (props) => {
  const invigilatorExpByRoles = {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: [
      "Chief Invigilator",
      "Vice Chief Invigilator",
      "Room Keeper",
      "Environmental Supervisor",
      "Invigilator",
      "Reserved Invigilator",
    ],
    series: props.data ? Object.values(props.data.roles) : [0, 0, 0, 0, 0, 0],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
            offsetY: 40,
          },
        },
      },
    ],
  };

  const examCentersAssignedToCount = {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: props.data
      ? Object.keys(props.data.examCenters)
      : ["Exam Center 01", "Exam Center 02", "Exam Center 03"],
    series: props.data ? Object.values(props.data.examCenters) : [0, 0, 0],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
            offsetY: 40,
          },
        },
      },
    ],
  };
  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
          <SimpleCard
            className="h-100"
            title={`Invigilator Experience by Role`}
          >
            <Chart
              options={invigilatorExpByRoles}
              series={invigilatorExpByRoles.series}
              type={invigilatorExpByRoles.chart.type}
            />
          </SimpleCard>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
          <SimpleCard className="h-100" title={`Exam Centers Assigned To Count`}>
            <Chart
              options={examCentersAssignedToCount}
              series={examCentersAssignedToCount.series}
              type={examCentersAssignedToCount.chart.type}
            />
          </SimpleCard>
        </Col>
      </Row>
    </div>
  );
};

export default TeacherDashboardChart;
