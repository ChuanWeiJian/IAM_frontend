import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";

import ExamCenterInformationHeader from "./components/ExamCenterInformationHeader";
import AssignmentTaskTable from "./components/AssignmentTasksTable";
import { setPage, setRowsPerPage } from "app/redux/actions/TableActions";
import { getExamCenterInformation } from "app/redux/actions/ExamCenterInformationActions";

const ExamCenterInformation = (props) => {
  const centerId = useParams().centerId;
  useEffect(() => {
    props.getExamCenterInformation(centerId);
  }, []);

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "School & Exam Centers", path: "/examcenter" },
          { name: "Registered School List", path: "/school/list" },
          {
            name: "School Information",
            path: `/school/${
              props.examCenter.school ? props.examCenter.school.id : ""
            }`,
          },
          { name: "Exam Center Information" },
        ]}
      ></Breadcrumb>
      <ExamCenterInformationHeader
        schoolCode={
          props.examCenter.school ? props.examCenter.school.schoolCode : ""
        }
        examCenterCode={props.examCenter.examCenterCode}
        name={props.examCenter.school ? props.examCenter.school.name : ""}
        address={props.examCenter.school ? props.examCenter.school.address : ""}
      />
      <div className="mb-5"></div>

      <SimpleCard title="Assignment Tasks Involved">
        <AssignmentTaskTable
          assignmentTasks={props.assignmentTasks}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          setPage={props.setPage}
          setRowsPerPage={props.setRowsPerPage}
        />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    examCenter: state.examCenterInformation.examCenter,
    assignmentTasks: state.examCenterInformation.assignmentTasks,
    page: state.table.page,
    rowsPerPage: state.table.rowsPerPage,
  };
};

export default connect(mapStateToProps, {
  getExamCenterInformation,
  setPage,
  setRowsPerPage,
})(ExamCenterInformation);
