import React from "react";
import { Breadcrumb } from "@gull";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import { Form } from "react-bootstrap";
import {validateAssignmentTask as validate} from "../shared/validation";

import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormSelect,
  renderMultiColumnFormDateTimeField,
  renderMultiColumnFormDateTimeField2,
  renderMultipleColumnFormExamCentersCheckboxGroup,
} from "app/views/shared/form/form";
import {
  examTypes,
  examCenters,
} from "fake-db/static_data/NewAssignmentTaskData";

const NewAssignmentTask = (props) => {
  const handleFormSubmit = (values) => {
    console.log(values);
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
                      <Field
                        className="col-md-6"
                        name="assignmentDate"
                        placeholder="Please select assignment deadline"
                        helpText="Please select assignment deadline"
                        isValidDate={(current) => {
                          return current.isAfter(moment());
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
                              const newValue = examCenters.map(
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
                        items={examCenters}
                        component={
                          renderMultipleColumnFormExamCentersCheckboxGroup
                        }
                      />
                    </div>

                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn  btn-primary m-1"
                            >
                              Create Task
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
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "NewAssignmentTask", validate: validate })(
  NewAssignmentTask
);
