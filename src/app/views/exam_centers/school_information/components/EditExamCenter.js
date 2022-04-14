import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import swal from "sweetalert2";

import { renderMultiColumnFormInputField } from "app/views/shared/form/form";
import ExamCenterListModal from "../../shared/components/ExamCenterListModal";
import { checkExamCenterCodeUniqueness } from "../../shared/check_uniqueness";
import { validateExamCenter as validate } from "../../shared/validation";
import {
  toggleForm,
  toggleExamCenterListModal,
} from "app/redux/actions/SchoolInformationActions";

const EditExamCenter = (props) => {
  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Saving changes...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: () => {
        //submit form process here remember to async and await with try...catch block
        console.log(props.school.id);
        console.log(values);
        swal.hideLoading();
        swal
          .fire({
            title: "Success",
            icon: "success",
            html: "Successful saved the changes",
          })
          .then((result) => {
            //refresh the school list or update the exam center number of the school
            props.toggleForm(false);
            props.reset();
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
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
          <Modal.Title>Edit Exam Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-4">
            <div className="col-md-12 mb-4">
              <div className="text-left p-1">
                <div className="p-3">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header bg-transparent">
                        <h3 className="card-title">
                          {`${props.school.schoolCode} - ${props.school.name}`}
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
                                  } else if (
                                    props.examCenterCode ===
                                    props.initialValues.examCenterCode
                                  ) {
                                    swal.fire(
                                      "Same exam center code",
                                      `The exam center code is exactly the same before changes`,
                                      "info"
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

const selector = formValueSelector("EditExamCenter");

const mapStateToProps = (state) => {
  return {
    school: state.schoolInformation.school,
    initialValues: state.schoolInformation.school.examCenters
      ? state.schoolInformation.school.examCenters.length != 0
        ? {
            examCenterCode:
              state.schoolInformation.school.examCenters[
                state.schoolInformation.selectedIndex
              ].examCenterCode,
            safeRoomNo:
              state.schoolInformation.school.examCenters[
                state.schoolInformation.selectedIndex
              ].safeRoomNo,
          }
        : { examCenterCode: "", safeRoomNo: "" }
      : {},
    examCenterCode: selector(state, "examCenterCode"),
    examCenters: state.schoolInformation.examCenters,
    showModal: state.schoolInformation.showModal,
    showForm: state.schoolInformation.showForm,
  };
};

export default connect(mapStateToProps, {
  toggleForm,
  toggleExamCenterListModal,
})(
  reduxForm({
    form: "EditExamCenter",
    validate: validate,
    enableReinitialize: true,
  })(EditExamCenter)
);
