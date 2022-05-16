import React from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { SimpleCard } from "@gull";
import ReactEcharts from "echarts-for-react";
import Chart from "react-apexcharts";

const AdminDashboardChart = (props) => {
  const statusPieChartOption = {
    color: ["#4caf50", "#f44336"],
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)",
    },
    series: [
      {
        name: "Officer Account Status Count",
        type: "pie",
        radius: "60%",
        center: ["50%", "50%"],
        data: [
          { value: props.data ? props.data.status.active : 0, name: "Active" },
          {
            value: props.data ? props.data.status.inactive : 0,
            name: "Inactive",
          },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const districtAccountCountBarChartOptions = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          console.log(chart, w, e);
        },
      },
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#546E7A",
      "#26a69a",
      "#D10CE8",
      "#ffff66",
      "#996633",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        data: props.data
          ? [
              props.data.districts["Batu Pahat"],
              props.data.districts["Johor Bahru"],
              props.data.districts["Kluang"],
              props.data.districts["Kota Tinggi"],
              props.data.districts["Kulai"],
              props.data.districts["Mersing"],
              props.data.districts["Muar"],
              props.data.districts["Pontian"],
              props.data.districts["Segamat"],
              props.data.districts["Tangkak"],
            ]
          : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    xaxis: {
      categories: [
        "Batu Pahat",
        "Johor Bahru",
        "Kluang",
        "Kota Tinggi",
        "Kulai",
        "Mersing",
        "Muar",
        "Pontian",
        "Segamat",
        "Tangkak",
      ],
      labels: {
        style: {
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#546E7A",
            "#26a69a",
            "#D10CE8",
            "#ffff66",
            "#996633",
          ],
          fontSize: "14px",
        },
      },
    },
  };
  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
          <SimpleCard title="Officer Account Status">
            <ReactEcharts
              style={{ height: "280px" }}
              option={statusPieChartOption}
            />
          </SimpleCard>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
          <SimpleCard className="h-100" title="Officer Account Count">
            <Chart
              options={districtAccountCountBarChartOptions}
              series={districtAccountCountBarChartOptions.series}
              type={districtAccountCountBarChartOptions.chart.type}
            />
          </SimpleCard>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboardChart;
