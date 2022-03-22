import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb } from "@gull";
import { useParams } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";

import { renderEditAssignmentResultField } from "../../shared/form/form";
import { initializeForm } from "app/redux/actions/EditAssignmentResultActions";
import { validateAssignmentResult as validate } from "../shared/validation";
import {
  AssignmentTasks,
  examCenters,
  Invigilators,
  AssignmentResults,
} from "fake-db/static_data/EditAssignmentResult";

const EditAssignmentResult = (props) => {
  const taskId = useParams().taskId;
  const role = useParams().role;
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);

  const assignmentResult = AssignmentResults.find(
    (result) => result.assignmentTask === taskId && result.role === role
  );

  let resolvedResult, involvedInvigilators;
  if (assignmentResult) {
    resolvedResult = {
      ...assignmentResult,
      results: assignmentResult.results.map((data) => {
        const examCenter = examCenters.find(
          (center) => center.id === data.examCenter
        );
        const invigilator = Invigilators.find(
          (invigilator) => invigilator.id === data.invigilator
        );
        return {
          examCenter: examCenter,
          invigilator: invigilator,
        };
      }),
    };

    involvedInvigilators = resolvedResult.results.map(
      (result) => result.invigilator
    );
  }

  const handleFormSubmit = (values) => {
    let newResults = [];
    for (let key in values) {
      const examCenterId = key.slice(6);
      newResults = [
        ...newResults,
        { examCenter: examCenterId, invigilator: values[key] },
      ];
    }

    console.log(newResults);
    console.log(values);
  };

  useEffect(() => {
    let initialValues = {};
    assignmentResult.results.forEach((result) => {
      const key = "result" + result.examCenter;
      initialValues[key] = result.invigilator;
    });

    props.initializeForm(initialValues);
  }, [assignmentResult]);

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: assignmentTask.title, path: `/assignment/${taskId}` },
          { name: "Edit Assignment Result" },
        ]}
      ></Breadcrumb>
      <div className="card">
        <div className="card-header bg-transparent">
          <h3 className="card-title">
            Edit Assignment Result : {_.startCase(role)}
          </h3>
          <form onSubmit={props.handleSubmit(handleFormSubmit)}>
            <div className="card-body">
              <div className="row">
                {resolvedResult.results.map((result, index) => (
                  <Field
                    key={index}
                    className="col-md-4"
                    name={`result${result.examCenter.id}`}
                    label={`${result.examCenter.schoolCode} - ${result.examCenter.examCenterCode} - ${result.examCenter.name}`}
                    options={involvedInvigilators}
                    originalExamCenterId={result.examCenter.id}
                    component={renderEditAssignmentResultField}
                  />
                ))}
              </div>

              <div className="card-footer">
                <div className="mc-footer">
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" className="btn  btn-primary m-1">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { initialValues: state.editAssignmentResult };
};

export default connect(mapStateToProps, { initializeForm: initializeForm })(
  reduxForm({
    form: "EditAssignmentResult",
    validate: validate,
    enableReinitialize: true,
  })(EditAssignmentResult)
);
