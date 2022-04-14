import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Breadcrumb } from "@gull";
import { Button } from "react-bootstrap";
import { Field, reduxForm, formValueSelector } from "redux-form";
import swal from "sweetalert2";
import axios from "axios";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import { renderMultiColumnFormInputField } from "app/views/shared/form/form";
import SchoolListModal from "../shared/components/SchoolListModal";
import { validateSchool as validate } from "../shared/validation";
import {
  initializeForm,
  toggleSchoolListModal,
} from "app/redux/actions/EditSchoolInformationActions";
import { resetError, setError } from "app/redux/actions/ErrorModalActions";
import { checkSchoolCodeUniqueness } from "../shared/check_uniqueness";

const EditSchoolInformation = (props) => {
  const schoolId = useParams().schoolId;
  const history = useHistory();

  useEffect(() => {
    props.initializeForm(schoolId);
  }, []);

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Save Changes...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: async () => {
        //submit form process here remember to async and await with try...catch block
        try {
          await axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_BACKEND_URL}/schools/${schoolId}`,
            data: values,
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully Edit School Information",
                icon: "success",
                html: "Successful saved the changes",
                allowOutsideClick: false,
              })
              .then((result) => {
                history.push(`/school/list`);
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
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "Schools & Exam Centers", path: "/examcenter" },
          { name: "School List", path: "/school/list" },
          { name: "Edit School Information" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> Edit School Information</h3>
                </div>
                <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                  <div className="card-body">
                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="schoolCode"
                        placeholder="School Code"
                        helpText="Please enter an unique school code"
                        component={renderMultiColumnFormInputField}
                      />
                      <div className="col-md-6 ">
                        <SchoolListModal
                          items={props.schools}
                          toggleModal={props.toggleSchoolListModal}
                          showModal={props.showModal}
                        />

                        <Button
                          className="text-capitalize btn btn-dark ms-2"
                          onClick={() => {
                            if (!props.schoolCode) {
                              swal.fire(
                                "No school code is entered",
                                `Please enter the school code first`,
                                "warning"
                              );
                            } else if (
                              props.schoolCode ===
                              props.initialValues.schoolCode
                            ) {
                              swal.fire(
                                "Same school code",
                                `The school code is same before changes`,
                                "info"
                              );
                            } else {
                              const unique = checkSchoolCodeUniqueness(
                                props.schools,
                                props.schoolCode
                              );
                              if (unique) {
                                swal.fire(
                                  "Unique",
                                  `The school code - ${props.schoolCode} is unique`,
                                  "success"
                                );
                              } else {
                                swal.fire(
                                  "Not Unique",
                                  `The school code - ${props.schoolCode} is not unique`,
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
                        className="col-md-6"
                        type="text"
                        name="name"
                        placeholder="School Name"
                        helpText="Please enter the school name"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        type="text"
                        name="address"
                        placeholder="School Address"
                        helpText="Please enter the school address"
                        component={renderMultiColumnFormInputField}
                      />
                    </div>

                    <div className="custom-separator"></div>
                  </div>
                  <div className="card-footer">
                    <div className="mc-footer">
                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" className="btn btn-primary m-1">
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

const selector = formValueSelector("EditSchoolInformation");

const mapStateToProps = (state) => {
  return {
    showModal: state.editSchoolInformation.showModal,
    schools: state.editSchoolInformation.schools,
    initialValues: state.editSchoolInformation.selectedSchool,
    schoolCode: selector(state, "schoolCode"),
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  toggleSchoolListModal,
  initializeForm,
  resetError,
  setError,
})(
  reduxForm({
    form: "EditSchoolInformation",
    validate: validate,
    enableReinitialize: true,
  })(EditSchoolInformation)
);
