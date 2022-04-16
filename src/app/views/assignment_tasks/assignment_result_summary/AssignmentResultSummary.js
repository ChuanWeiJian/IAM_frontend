import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import _ from "lodash";

import ErrorModal from "app/views/shared/components/ErrorModal";
import Loader from "app/views/shared/components/Loader";
import AssignmentTaskInfoHeader from "../shared/components/AssignmentTaskInfoHeader";
import AssignmentResultTable from "../shared/components/AssignmentResultTable";
import { resetError } from "app/redux/actions/ErrorModalActions";
import { getAssignmentResultSummary } from "app/redux/actions/AssignmentResultSummaryActions";

const AssignmentResultSummary = (props) => {
  const role = useParams().role;
  const taskId = useParams().taskId;

  useEffect(() => {
    props.getAssignmentResultSummary(role, taskId);
  }, []);

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: props.assignmentTask.title, path: `/assignment/${taskId}` },
          { name: "Summary of Assignment Result" },
        ]}
      ></Breadcrumb>
      <SimpleCard>
        <AssignmentTaskInfoHeader assignmentTask={props.assignmentTask} />

        <div className="custom-separator"></div>

        <h4>Summary of Assignment Result: {_.startCase(role)}</h4>
        <AssignmentResultTable
          results={props.result.results ? props.result.results : []}
        />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assignmentTask: state.assignmentResultSummary.result.assignmentTask
      ? state.assignmentResultSummary.result.assignmentTask
      : {},
    result: state.assignmentResultSummary.result,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  getAssignmentResultSummary,
  resetError,
})(AssignmentResultSummary);
