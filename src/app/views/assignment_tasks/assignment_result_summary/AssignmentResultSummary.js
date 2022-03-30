import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import _ from "lodash";
import AssignmentTaskInfoHeader from "../shared/components/AssignmentTaskInfoHeader";
import AssignmentResultTable from "../shared/components/AssignmentResultTable";
import { getAssignmentResultSummary } from "app/redux/actions/AssignmentResultSummaryActions";

const AssignmentResultSummary = (props) => {
  const role = useParams().role;
  const taskId = useParams().taskId;

  useEffect(() => {
    props.getAssignmentResultSummary(role, taskId);
  }, []);

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: props.assignmentTask.title, path: `/assignment/${taskId}` },
          { name: "Summary of Assignment Result" },
        ]}
      ></Breadcrumb>
      <SimpleCard>
        <AssignmentTaskInfoHeader
          assignmentTask={props.assignmentTask}
          status={props.status}
        />

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
    assignmentTask: state.assignmentResultSummary.assignmentTask,
    result: state.assignmentResultSummary.result,
    status: state.assignmentResultSummary.status,
  };
};

export default connect(mapStateToProps, { getAssignmentResultSummary })(
  AssignmentResultSummary
);
