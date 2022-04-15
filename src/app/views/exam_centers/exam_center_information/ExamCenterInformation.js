import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import ExamCenterInformationHeader from "./components/ExamCenterInformationHeader";
import AssignmentTaskTable from "./components/AssignmentTasksTable";
import {
  setPage,
  setRowsPerPage,
  resetTableState,
} from "app/redux/actions/TableActions";
import { resetError, setError } from "app/redux/actions/ErrorModalActions";
import { getExamCenterInformation } from "app/redux/actions/ExamCenterInformationActions";

const ExamCenterInformation = (props) => {
  const centerId = useParams().centerId;
  useEffect(() => {
    props.getExamCenterInformation(centerId);
    props.resetTableState();
  }, []);

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
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
        name={props.examCenter.school ? props.examCenter.school.schoolName : ""}
        address={
          props.examCenter.school ? props.examCenter.school.schoolAddress : ""
        }
      />
      <div className="mb-5"></div>

      <SimpleCard title="Assignment Tasks Involved">
        <AssignmentTaskTable
          assignmentTasks={
            props.examCenter.assignmentTasks
              ? props.examCenter.assignmentTasks
              : []
          }
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
    page: state.table.page,
    rowsPerPage: state.table.rowsPerPage,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  getExamCenterInformation,
  setPage,
  setRowsPerPage,
  resetTableState,
  resetError,
})(ExamCenterInformation);
