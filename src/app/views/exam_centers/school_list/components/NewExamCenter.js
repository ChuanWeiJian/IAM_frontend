import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import swal from "sweetalert2";
import axios from "axios";

import { renderMultiColumnFormInputField } from "app/views/shared/form/form";
import ExamCenterListModal from "../../shared/components/ExamCenterListModal";
import { checkExamCenterCodeUniqueness } from "../../shared/check_uniqueness";
import { validateExamCenter as validate } from "../../shared/validation";
import { addNewExamCenter } from "app/redux/actions/SchoolListActions";
import { setError } from "app/redux/actions/ErrorModalActions";

const NewExamCenter = (props) => {
  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Registering new exam center...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: async () => {
        //submit form process here remember to async and await with try...catch block
        try {
          values = { ...values, schoolId: props.school.id, district: "Kluang" };

          await axios({
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND_URL}/examcenters`,
            data: values,
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully Register Exam Centers",
                icon: "success",
                allowOutsideClick: false,
              })
              .then((result) => {
                props.addNewExamCenter(
                  props.selectedIndex,
                  response.data.examCenter
                );
                props.toggleForm(false);
                props.reset();
              });
          });
        } catch (err) {
          props.setError(err);
        }
      },
      allowOutsideClick: false,
    });
  };

  return (
    <Fragment>
      <Modal
        show={props.showForm}
        onHide={() => {
          props.toggleForm(false);
          props.reset();
        }}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register New Exam Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.school && (
            <div className="row mb-4">
              <div className="col-md-12 mb-4">
                <div className="text-left p-1">
                  <div className="p-3">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header bg-transparent">
                          <h3 className="card-title">
                            {`${props.school.schoolCode} - ${props.school.schoolName}`}
                          </h3>
                        </div>
                        <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                          <div className="card-body">
                            <div className="row">
                              <Field
                                className="col-md-12"
                                type="text"
                                name="examCenterCode"
                                placeholder="Exam Center Code"
                                helpText="Please enter the unique exam center code"
                                component={renderMultiColumnFormInputField}
                              />
                              <div className="col-md-12">
                                <ExamCenterListModal
                                  items={props.examCenters}
                                  toggleModal={props.toggleExamCenterListModal}
                                  showModal={props.showModal}
                                />

                                <Button
                                  type="button"
                                  className="text-capitalize btn btn-dark ms-2"
                                  onClick={() => {
                                    if (!props.examCenterCode) {
                                      swal.fire(
                                        "No exam center code is entered",
                                        `Please enter the exam center code first`,
                                        "warning"
                                      );
                                    } else {
                                      const unique =
                                        checkExamCenterCodeUniqueness(
                                          props.examCenters,
                                          props.examCenterCode
                                        );
                                      if (unique) {
                                        swal.fire(
                                          "Unique",
                                          `The examCenter code - ${props.examCenterCode} is unique`,
                                          "success"
                                        );
                                      } else {
                                        swal.fire(
                                          "Not Unique",
                                          `The examCenter code - ${props.examCenterCode} is not unique`,
                                          "error"
                                        );
                                      }
                                    }
                                  }}
                                >
                                  Check Uniqueness
                                </Button>
                              </div>
                            </div>

                            <div className="custom-separator"></div>

                            <div className="row">
                              <Field
                                className="col-md-12"
                                type="text"
                                name="safeRoomNo"
                                placeholder="Safe Room No"
                                helpText="Please enter the safe room number"
                                component={renderMultiColumnFormInputField}
                              />
                            </div>

                            <div className="custom-separator"></div>
                          </div>
                          <div className="card-footer">
                            <div className="mc-footer">
                              <div className="row">
                                <div className="col-lg-12">
                                  <button
                                    type="submit"
                                    className="btn btn-primary m-1"
                                  >
                                    Register Exam Center
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
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.toggleForm(false);
              props.reset();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

const selector = formValueSelector("NewExamCenter");

const mapStateToProps = (state) => {
  return {
    examCenterCode: selector(state, "examCenterCode"),
    selectedIndex: state.schoolList.selectedIndex,
  };
};

export default connect(mapStateToProps, { setError, addNewExamCenter })(
  reduxForm({ form: "NewExamCenter", validate: validate })(NewExamCenter)
);
