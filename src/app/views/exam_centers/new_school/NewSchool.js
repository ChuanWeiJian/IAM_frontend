import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { Breadcrumb } from "@gull";
import { Button } from "react-bootstrap";
import { Field, reduxForm, formValueSelector } from "redux-form";
import swal from "sweetalert2";
import axios from "axios";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import { typeOfSchools } from "fake-db/static_data/ExamCenter";
import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormSelect,
} from "app/views/shared/form/form";
import SchoolListModal from "../shared/components/SchoolListModal";
import { validateSchool as validate } from "../shared/validation";
import {
  getAllSchools,
  toggleSchoolListModal,
} from "app/redux/actions/NewSchoolActions";
import { resetError, setError } from "app/redux/actions/ErrorModalActions";
import { checkSchoolCodeUniqueness } from "../shared/check_uniqueness";

const NewSchool = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.getAllSchools();
  }, []);

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Registering new school...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: async () => {
        //submit form process here remember to async and await with try...catch block
        try {
          await axios({
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND_URL}/schools`,
            data: values,
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully Register School",
                icon: "success",
                html: renderToStaticMarkup(
                  <>
                    <h3>Exam Secretary Account</h3>
                    <p>Username: {response.data.login}</p>
                    <p>Password: {response.data.password}</p>
                  </>
                ),
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
          { name: "New School" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> New School</h3>
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
                        name="schoolName"
                        placeholder="School Name"
                        helpText="Please enter the school name"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        type="text"
                        name="schoolAddress"
                        placeholder="School Address"
                        helpText="Please enter the school address"
                        component={renderMultiColumnFormInputField}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="postcode"
                        placeholder="Postcode"
                        helpText="Please enter the postcode"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        type="text"
                        name="city"
                        placeholder="City"
                        helpText="Please enter the city"
                        component={renderMultiColumnFormInputField}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="stateCode"
                        placeholder="State Code"
                        helpText="Please enter the state code"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        type="text"
                        name="areaCode"
                        placeholder="Area Code"
                        helpText="Please enter the area code"
                        component={renderMultiColumnFormInputField}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="taxNumber"
                        placeholder="Tax Number"
                        helpText="Please enter the Tax Number"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        name="typeOfSchool"
                        items={typeOfSchools}
                        helpText="Please select the type of school"
                        defaultOption="Please select type of school..."
                        component={renderMultiColumnFormSelect}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="codeDun"
                        placeholder="Code DUN"
                        helpText="Please enter the code DUN"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        type="text"
                        name="codeParlimen"
                        placeholder="Code Parlimen"
                        helpText="Please enter the code Parlimen"
                        component={renderMultiColumnFormInputField}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="schoolPhoneNumber"
                        placeholder="Phone Number"
                        helpText="Please enter the school phone number"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        type="email"
                        name="schoolEmailAddress"
                        placeholder="Email Address"
                        helpText="Please enter the school email address"
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
                            Register School
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

const selector = formValueSelector("NewSchool");

const mapStateToProps = (state) => {
  return {
    showModal: state.newSchool.showModal,
    schools: state.newSchool.schools,
    schoolCode: selector(state, "schoolCode"),
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  toggleSchoolListModal,
  getAllSchools,
  resetError,
  setError,
})(reduxForm({ form: "NewSchool", validate: validate })(NewSchool));
