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

const EditAssignmentResult = (props) => {
  const history = useHistory();
  const taskId = useParams().taskId;
  const role = useParams().role;

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
            { examCenter: examCenterId, invigilators: values[key] },
          ];
        }

        console.log({ results: newResults });
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
    props.initializeForm(role, taskId);
  }, []);

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: props.assignmentTask.title, path: `/assignment/${taskId}` },
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
              {props.assignmentResult.results &&
                props.assignmentResult.results.map((result, index) => {
                  const label = `${props.assignmentResult.results[index].examCenter.school.schoolCode} - ${props.assignmentResult.results[index].examCenter.examCenterCode} - ${props.assignmentResult.results[index].examCenter.school.name}`;
                  return (
                    <FieldArray
                      key={index}
                      name={`result${result.examCenter.id}`}
                      options={props.involvedInvigilators}
                      label={label}
                      component={renderEditAssignmentResultArrayField}
                      schoolId={result.examCenter.school.id}
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
  let initialValues = {};
  if (state.editAssignmentResult.assignmentResult.results) {
    state.editAssignmentResult.assignmentResult.results.forEach((result) => {
      const key = "result" + result.examCenter.id;
      initialValues[key] = result.invigilators.map(
        (invigilator) => invigilator.id
      );
    });
  }

  return {
    initialValues: initialValues,
    assignmentTask: state.editAssignmentResult.assignmentTask,
    assignmentResult: state.editAssignmentResult.assignmentResult,
    involvedInvigilators: state.editAssignmentResult.invigilators,
  };
};

export default connect(mapStateToProps, { initializeForm })(
  reduxForm({
    form: "EditAssignmentResult",
    validate: validate,
    enableReinitialize: true,
  })(EditAssignmentResult)
);
