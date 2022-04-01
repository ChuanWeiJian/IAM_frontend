import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { Breadcrumb } from "@gull";
import { Button } from "react-bootstrap";
import { Field, reduxForm, formValueSelector } from "redux-form";
import swal from "sweetalert2";

import { renderMultiColumnFormInputField } from "app/views/shared/form/form";
import SchoolListModal from "../shared/components/SchoolListModal";
import { examSecretaries } from "fake-db/static_data/ExamCenter";
import { validateSchool as validate } from "../shared/validation";
import {
  getAllSchools,
  toggleSchoolListModal,
} from "app/redux/actions/NewSchoolActions";
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
      onOpen: () => {
        //submit form process here remember to async and await with try...catch block
        const examSecretaryAcc = examSecretaries.find((acc) => acc.id === "04");
        console.log(values);
        swal.hideLoading();
        swal
          .fire({
            title: "Success",
            icon: "success",
            html: renderToStaticMarkup(
              <>
                <h3>Exam Secretary Account</h3>
                <p>Username: {examSecretaryAcc.username}</p>
                <p>Password: {examSecretaryAcc.password}</p>
              </>
            ),
          })
          .then((result) => {
            history.push(`/`);
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  };

  return (
    <div>
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
  };
};

export default connect(mapStateToProps, {
  toggleSchoolListModal,
  getAllSchools,
})(reduxForm({ form: "NewSchool", validate: validate })(NewSchool));
