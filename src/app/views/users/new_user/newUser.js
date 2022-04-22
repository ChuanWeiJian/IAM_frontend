import React from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumb } from "@gull";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import swal from "sweetalert2";
import axios from "axios";

import { district } from "fake-db/static_data/District";
import ErrorModal from "app/views/shared/components/ErrorModal";
import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormSelect,
} from "app/views/shared/form/form";
import { setError, resetError } from "app/redux/actions/ErrorModalActions";
import { generateRandomPassword } from "app/views/shared/function/generatePassword";
import { validateUserAccount as validate } from "../shared/validation";

const NewOfficerAccount = (props) => {
  const history = useHistory();

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Registering new officer account...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: async () => {
        //submit form process here remember to async and await with try...catch block
        try {
          await axios({
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND_URL}/users`,
            data: values,
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully register new officer account",
                icon: "success",
                allowOutsideClick: false,
              })
              .then((result) => {
                history.push("/user/list");
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

  return (
    <div>
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "User Management", path: "/user" },
          { name: "New Officer Account" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> New Officer Account</h3>
                </div>
                <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                  <div className="card-body">
                    <div className="row">
                      <Field
                        className="col-md-6"
                        name="login"
                        type="text"
                        placeholder="User Login"
                        helpText="Please enter the user login"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-4"
                        name="password"
                        type="text"
                        placeholder="User Password"
                        helpText="Please enter the user password"
                        component={renderMultiColumnFormInputField}
                      />

                      <div className="col-md-2">
                        <Button
                          className="text-capitalize btn btn-dark ms-2"
                          onClick={() => {
                            props.change("password", generateRandomPassword());
                          }}
                        >
                          Generate Random Password
                        </Button>
                      </div>
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        name="district"
                        items={district}
                        helpText="Please select the district"
                        defaultOption="Please select a district..."
                        component={renderMultiColumnFormSelect}
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="mc-footer">
                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" className="btn btn-primary m-1">
                            Sign up new officer account
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
  return { httpError: state.error.error };
};

export default connect(mapStateToProps, { resetError, setError })(
  reduxForm({ form: "NewOfficerAccount", validate: validate })(
    NewOfficerAccount
  )
);
