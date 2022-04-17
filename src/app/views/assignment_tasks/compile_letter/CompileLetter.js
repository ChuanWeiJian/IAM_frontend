import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import _ from "lodash";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import { getCompileLetterInfo } from "app/redux/actions/CompileLetterActions";
import LetterTemplateForm from "./components/LetterTemplateForm";
import AssignmentResultTable from "../shared/components/AssignmentResultTable";
import { resetError } from "app/redux/actions/ErrorModalActions";

const CompileLetter = (props) => {
  const role = useParams().role;
  const taskId = useParams().taskId;

  useEffect(() => {
    props.getCompileLetterInfo(role, taskId);
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
          { name: "Compile Letter" },
        ]}
      ></Breadcrumb>
      <SimpleCard
        title="Letter Template"
        subtitle="Please select the letter template"
      >
        <LetterTemplateForm
          letters={props.letterTemplates}
          taskId={taskId}
          role={role}
        />

        <div className="custom-separator"></div>

        <h4>Summary of Assignment Result: {_.startCase(role)}</h4>
        <AssignmentResultTable
          results={
            props.assignmentResult.results ? props.assignmentResult.results : []
          }
        />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assignmentTask: state.compileLetter.assignmentResult.assignmentTask
      ? state.compileLetter.assignmentResult.assignmentTask
      : {},
    assignmentResult: state.compileLetter.assignmentResult,
    letterTemplates: state.compileLetter.letterTemplates,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, { getCompileLetterInfo, resetError })(
  CompileLetter
);
