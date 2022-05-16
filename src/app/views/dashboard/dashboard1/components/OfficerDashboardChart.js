import React from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { SimpleCard } from "@gull";
import ReactEcharts from "echarts-for-react";
import Chart from "react-apexcharts";

const OfficerDashboardChart = (props) => {
  const year = new Date().getFullYear();

  const assignmentTasksInYear = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "8%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value}",
        color: "#333",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 400,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      splitLine: {
        lineStyle: {
          color: "#ddd",
          width: 1,
          opacity: 0.5,
        },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      axisLabel: {
        formatter: "{value}",
        color: "#333",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 400,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
    },
    series: [
      {
        color: "#3182bd",
        name: "Data Incomplete",
        type: "bar",
        barGap: 0,
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: props.data
          ? props.data.incomplete
          : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        color: "#74c475",
        name: "Collection",
        type: "bar",
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: props.data
          ? props.data.collection
          : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        color: "#e6550d",
        name: "Assigning",
        type: "bar",
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: props.data
          ? props.data.assigning
          : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        color: "#756bb1",
        name: "Complete",
        type: "bar",
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: props.data
          ? props.data.complete
          : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

  const assignmentTasksByExamCenters = {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: props.data
      ? Object.keys(props.data.examCenters)
      : [
          "Exam Center A",
          "Exam Center B",
          "Exam Center C",
          "Exam Center D",
          "Exam Center E",
        ],
    series: props.data
      ? Object.values(props.data.examCenters)
      : [0, 0, 0, 0, 0],
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

  const assignmentTasksByExamType = {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: props.data
      ? Object.keys(props.data.examType)
      : ["STPM", "SPM", "MUET", "PT3"],
    series: props.data ? Object.values(props.data.examType) : [0, 0, 0, 0],
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
      <Row className="justify-content-center">
        <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
          <SimpleCard title={`Assignment Tasks in ${year}`}>
            <ReactEcharts
              style={{ height: "280px" }}
              option={assignmentTasksInYear}
            />
          </SimpleCard>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="mb-4">
          <SimpleCard
            className="h-100"
            title={`Assignment Tasks by Exam Centers in ${year}`}
          >
            <Chart
              options={assignmentTasksByExamCenters}
              series={assignmentTasksByExamCenters.series}
              type={assignmentTasksByExamCenters.chart.type}
            />
          </SimpleCard>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="mb-4">
          <SimpleCard
            className="h-100"
            title={`Assignment Tasks by Exam Types in ${year}`}
          >
            <Chart
              options={assignmentTasksByExamType}
              series={assignmentTasksByExamType.series}
              type={assignmentTasksByExamType.chart.type}
            />
          </SimpleCard>
        </Col>
      </Row>
    </div>
  );
};

export default OfficerDashboardChart;
