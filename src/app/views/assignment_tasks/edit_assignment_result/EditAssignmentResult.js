import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb } from "@gull";
import { useParams, useHistory } from "react-router-dom";
import { FieldArray, reduxForm } from "redux-form";
import _ from "lodash";
import swal from "sweetalert2";

import { renderEditAssignmentResultArrayField } from "../../shared/form/form";
import { initializeForm } from "app/redux/actions/EditAssignmentResultActions";
import { validateAssignmentResult as validate } from "../shared/validation";
import {
  AssignmentTasks,
  examCenters,
  Invigilators,
  AssignmentResults,
} from "fake-db/static_data/AssignmentTask";

const EditAssignmentResult = (props) => {
  const history = useHistory();
  const taskId = useParams().taskId;
  const role = useParams().role;
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);

  const assignmentResult = AssignmentResults.find(
    (result) => result.assignmentTask === taskId && result.role === role
  );

  let resolvedResult;
  let involvedInvigilators = [];
  if (assignmentResult) {
    resolvedResult = {
      ...assignmentResult,
      results: assignmentResult.results.map((data) => {
        const examCenter = examCenters.find(
          (center) => center.id === data.examCenter
        );
        const invigilators = data.invigilators.map((invigilatorId) =>
          Invigilators.find((invigilator) => invigilator.id === invigilatorId)
        );

        involvedInvigilators = [...involvedInvigilators, ...invigilators];

        return {
          examCenter: examCenter,
          invigilators: invigilators,
        };
      }),
    };

    involvedInvigilators.sort((a, b) => {
      if (a.examCenterCode > b.examCenterCode) {
        return 1;
      } else if (a.examCenterCode < b.examCenterCode) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Saving Changes...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: () => {
        //submit form process here remember to async and await with try...catch block
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
        swal.hideLoading();
        swal
          .fire("Success", "Successful save the changes", "success")
          .then((result) => {
            history.push(`/assignment/${taskId}`);
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  };

  useEffect(() => {
    let initialValues = {};
    assignmentResult.results.forEach((result) => {
      const key = "result" + result.examCenter;
      initialValues[key] = result.invigilators;
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
        </div>
        <form onSubmit={props.handleSubmit(handleFormSubmit)}>
          <div className="card-body">
            <div className="row">
              {assignmentResult.results.map((result, index) => {
                const label = `${resolvedResult.results[index].examCenter.schoolCode} - ${resolvedResult.results[index].examCenter.examCenterCode} - ${resolvedResult.results[index].examCenter.name}`;
                return (
                  <FieldArray
                    key={index}
                    name={`result${result.examCenter}`}
                    options={involvedInvigilators}
                    label={label}
                    component={renderEditAssignmentResultArrayField}
                    examCenterId={result.examCenter}
                  />
                );
              })}
            </div>
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
        </form>
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
