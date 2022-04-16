import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb } from "@gull";
import { useParams, useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import { Form } from "react-bootstrap";
import swal from "sweetalert2";
import axios from "axios";

import ErrorModal from "app/views/shared/components/ErrorModal";
import Loader from "app/views/shared/components/Loader";
import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormSelect,
  renderMultiColumnFormDateTimeField,
  renderMultipleColumnFormExamCentersCheckboxGroup,
} from "app/views/shared/form/form";
import { initializeForm } from "app/redux/actions/EditAssignmentTaskActions";
import { setError, resetError } from "app/redux/actions/ErrorModalActions";
import { examTypes } from "fake-db/static_data/AssignmentTask";
import { validateAssignmentTask as validate } from "../shared/validation";

const EditAssignmentTask = (props) => {
  const history = useHistory();
  const taskId = useParams().taskId;

  useEffect(() => {
    props.initializeForm(taskId);
  }, []);

  const handleFormSubmit = (values) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "Any changes adding or removing exam centers will remove the previous assignment result",
        icon: "warning",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Save Changes!",
        cancelButtonText: "No",
      })
      .then((result) => {
        if (result.value) {
          swal.fire({
            title: "Saving Changes...",
            onBeforeOpen: () => {
              swal.showLoading();
            },
            onOpen: async () => {
              //submit form process here remember to async and await with try...catch block
              try {
                await axios({
                  method: "PATCH",
                  url: `${process.env.REACT_APP_BACKEND_URL}/assignments/${taskId}`,
                  data: values,
                }).then((response) => {
                  swal.hideLoading();
                  swal
                    .fire({
                      title: "Successfully Edit Assignment Task",
                      icon: "success",
                      html: "Please re-assign the invigilators if there is any adding/removing of exam centers",
                      allowOutsideClick: false,
                    })
                    .then((result) => {
                      history.push("/assignment/list");
                    });
                });
              } catch (err) {
                swal.hideLoading();
                props.setError(err);
              }
            },
            allowOutsideClick: false,
          });
        } else {
          swal.fire("Cancelled!", "Permission denied.", "error");
        }
      });
  };

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: "Edit Assignment Task" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> Edit Assignment Task</h3>
                </div>
                <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                  <div className="card-body">
                    <div className="row">
                      <Field
                        className="col-md-6"
                        name="title"
                        type="text"
                        placeholder="Assignment Task Title"
                        helpText="Please enter the assignment task's title"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        name="examType"
                        items={examTypes}
                        helpText="Please select the exam type"
                        defaultOption="Please select an exam type..."
                        component={renderMultiColumnFormSelect}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        name="collectionDate"
                        placeholder="Please select data collection deadline"
                        helpText="Please select data collection deadline"
                        isValidDate={(current) => {
                          return current.isAfter(moment().subtract(1, "day"));
                        }}
                        component={renderMultiColumnFormDateTimeField}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <div className="form-group col-md-6">
                        <Form.Check
                          type="switch"
                          name="selectAll"
                          label="Select All Exam Centers"
                          onChange={(event) => {
                            if (event.target.checked) {
                              const newValue = props.examCenters.map(
                                (examCenter) => examCenter.id
                              );
                              props.change("examCenters", newValue);
                            } else {
                              props.change("examCenters", []);
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <Field
                        name="examCenters"
                        items={props.examCenters}
                        component={
                          renderMultipleColumnFormExamCentersCheckboxGroup
                        }
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="mc-footer">
                      <div className="row">
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn  btn-primary m-1"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      title: state.editAssignmentTask.assignmentTask.title,
      examType: state.editAssignmentTask.assignmentTask.examType,
      collectionDate: moment(
        state.editAssignmentTask.assignmentTask.collectionDate,
        moment.ISO_8601
      ).format("DD/MM/YYYY HH:mm"),
      examCenters: state.editAssignmentTask.assignmentTask.examCenters,
    },
    examCenters: state.editAssignmentTask.examCenters,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  initializeForm,
  setError,
  resetError,
})(
  reduxForm({
    form: "EditAssignmentTask",
    validate: validate,
    enableReinitialize: true,
  })(EditAssignmentTask)
);
