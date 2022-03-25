import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import { examCenters, AssignmentTasks } from "fake-db/static_data/ExamCenter";
import ExamCenterInformationHeader from "./components/ExamCenterInformationHeader";
import { connect } from "react-redux";
import { setPage, setRowsPerPage } from "app/redux/actions/TableActions";
import AssignmentTaskTable from "./components/AssignmentTasksTable";

const ExamCenterInformation = (props) => {
  const centerId = useParams().centerId;
  const examCenter = examCenters.find((center) => center.id === centerId);

  const assignmentTasks = examCenter.assignmentTasks.map((taskId) =>
    AssignmentTasks.find((task) => task.id === taskId)
  );

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Exam Centers", path: "/examcenter" },
          { name: "Exam Centers List", path: "/examcenter/list" },
          { name: "Exam Center Information" },
        ]}
      ></Breadcrumb>
      <ExamCenterInformationHeader
        schoolCode={examCenter.schoolCode}
        examCenterCode={examCenter.examCenterCode}
        name={examCenter.name}
        address={examCenter.address}
      />
      <div className="mb-5"></div>

      <SimpleCard title="Assignment Tasks Involved">
        <AssignmentTaskTable
          assignmentTasks={assignmentTasks}
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
    page: state.table.page,
    rowsPerPage: state.table.rowsPerPage,
  };
};

export default connect(mapStateToProps, { setPage, setRowsPerPage })(
  ExamCenterInformation
);
