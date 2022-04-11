import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Breadcrumb } from "@gull";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import { Form } from "react-bootstrap";
import { validateAssignmentTask as validate } from "../shared/validation";
import swal from "sweetalert2";

import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormSelect,
  renderMultiColumnFormDateTimeField,
  renderMultipleColumnFormExamCentersCheckboxGroup,
} from "app/views/shared/form/form";
import { examTypes } from "fake-db/static_data/AssignmentTask";
import { getAllExamCenters } from "app/redux/actions/NewAssignmentTaskActions";

const NewAssignmentTask = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.getAllExamCenters();
  }, []);

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Creating Assignment Task...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: () => {
        //submit form process here remember to async and await with try...catch block
        console.log(values);
        console.log(values.collectionDate.toString());
        console.log(
          moment("2022-04-05T16:00:00.000Z", moment.ISO_8601).format(
            "DD/MM/YYYY HH:mm"
          )
        );
        swal.hideLoading();
        swal
          .fire("Success", "Successful create new assignment task", "success")
          .then((result) => {
            history.push("/assignment/list");
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  };

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "New Assignment Task" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> New Assignment Task</h3>
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
                        placeholder="Please select collection deadline"
                        isValidDate={(current) => {
                          return current.isAfter(moment().subtract(1, "day"));
                        }}
                        helpText="Please select data collection deadline"
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
                          <button type="submit" className="btn btn-primary m-1">
                            Create Task
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
  return state.newAssignmentTask;
};

export default connect(mapStateToProps, { getAllExamCenters })(
  reduxForm({ form: "NewAssignmentTask", validate: validate })(
    NewAssignmentTask
  )
);
