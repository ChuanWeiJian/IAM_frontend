import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Breadcrumb } from "@gull";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import swal from "sweetalert2";
import axios from "axios";

import { district } from "fake-db/static_data/District";
import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormSelect,
} from "app/views/shared/form/form";
import { setError, resetError } from "app/redux/actions/ErrorModalActions";
import { initializeForm } from "app/redux/actions/EditAccountInformationActions";
import { validateEditAccount as validate } from "../shared/validation";

const EditAccountInformation = (props) => {
  const history = useHistory();
  const accountId = useParams().id;

  useEffect(() => {
    props.initializeForm(accountId);
  }, []);

  const handleFormSubmit = (values) => {
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
            url: `${process.env.REACT_APP_BACKEND_URL}/users/officer/${accountId}`,
            data: values,
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully edit the officer account",
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
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "User Management", path: "/user" },
          { name: "Officer Accounts List", path: "/user/list" },
          { name: "Edit Officer Account" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> Edit Officer Account</h3>
                </div>
                <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                  <div className="card-body">
                    <div className="row">
                      <Field
                        className="col-md-6"
                        name="login"
                        readOnly="true"
                        type="text"
                        placeholder="User Login"
                        helpText="Please enter the user login"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        name="district"
                        items={district}
                        helpText="Please select the district"
                        defaultOption="Please select a district..."
                        component={renderMultiColumnFormSelect}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        name="status"
                        items={[
                          { id: "01", title: "Active", value: 1 },
                          { id: "02", title: "Inactive", value: 0 },
                        ]}
                        helpText="Please select the status"
                        defaultOption="Please select a status..."
                        component={renderMultiColumnFormSelect}
                      />
                    </div>
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

const mapStateToProps = (state) => {
  return {
    initialValues: state.editAccountInformation.account,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  resetError,
  setError,
  initializeForm,
})(
  reduxForm({
    form: "EditAccountInformation",
    validate: validate,
    enableReinitialize: true,
  })(EditAccountInformation)
);
