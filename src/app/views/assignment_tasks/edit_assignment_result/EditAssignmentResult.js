import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb } from "@gull";
import { useParams, useHistory } from "react-router-dom";
import { FieldArray, reduxForm } from "redux-form";
import _ from "lodash";
import swal from "sweetalert2";
import axios from "axios";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import { renderEditAssignmentResultArrayField } from "../../shared/form/form";
import { initializeForm } from "app/redux/actions/EditAssignmentResultActions";
import { validateAssignmentResult as validate } from "../shared/validation";
import { resetError, setError } from "app/redux/actions/ErrorModalActions";

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
      onOpen: async () => {
        //submit form process here remember to async and await with try...catch block
        try {
          let resolvedResults = [];
          for (let key in values) {
            const examCenterId = key.slice(6);
            resolvedResults = [
              ...resolvedResults,
              { examCenter: examCenterId, invigilators: values[key] },
            ];
          }

          await axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_BACKEND_URL}/results/${props.assignmentResult.id}`,
            data: { results: resolvedResults },
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully Edit Assignment Result",
                icon: "success",
                allowOutsideClick: false,
              })
              .then((result) => {
                history.push(`/assignment/${taskId}`);
              });
          });
        } catch (err) {
          swal.hideLoading();
          props.setError(err);
        }
      },
      allowOutsideClick: false,
    });
  };

  useEffect(() => {
    props.initializeForm(role, taskId);
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
                  const label = `${props.assignmentResult.results[index].examCenter.school.schoolCode} - ${props.assignmentResult.results[index].examCenter.examCenterCode} - ${props.assignmentResult.results[index].examCenter.school.schoolName}`;
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
    assignmentTask: state.editAssignmentResult.assignmentResult.assignmentTask
      ? state.editAssignmentResult.assignmentResult.assignmentTask
      : {},
    assignmentResult: state.editAssignmentResult.assignmentResult,
    involvedInvigilators: state.editAssignmentResult.invigilators,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  initializeForm,
  resetError,
  setError,
})(
  reduxForm({
    form: "EditAssignmentResult",
    validate: validate,
    enableReinitialize: true,
  })(EditAssignmentResult)
);
