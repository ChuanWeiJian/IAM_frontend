import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import swal from "sweetalert2";
import axios from "axios";

import { renderMultiColumnFormInputField } from "app/views/shared/form/form";
import { generateRandomPassword } from "app/views/shared/function/generatePassword";
import { setError } from "app/redux/actions/ErrorModalActions";
import { toggleForm } from "app/redux/actions/OfficerAccountsListActions";

const ChangePassword = (props) => {
  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Saving New Password...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: async () => {
        //submit form process here remember to async and await with try...catch block
        try {
          await axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_BACKEND_URL}/users/officer/password/${props.account.id}`,
            data: values,
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully Change Password",
                icon: "success",
                allowOutsideClick: false,
              })
              .then((result) => {
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
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-4">
            <div className="col-md-12 mb-4">
              <div className="text-left p-1">
                <div className="p-3">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header bg-transparent">
                        <h3 className="card-title">{props.account.login}</h3>
                      </div>
                      <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                        <div className="card-body">
                          <div className="row">
                            <Field
                              className="col-md-12"
                              type="text"
                              name="password"
                              placeholder="New Password"
                              helpText="Please enter the new password"
                              component={renderMultiColumnFormInputField}
                            />
                            <div className="col-md-12">
                              <Button
                                type="button"
                                className="text-capitalize btn btn-dark ms-2"
                                onClick={() => {
                                  props.change(
                                    "password",
                                    generateRandomPassword()
                                  );
                                }}
                              >
                                Random Password
                              </Button>
                            </div>
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
                                  Change Password
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

const mapStateToProps = (state) => {
  return {
    account:
      state.accountsList.accounts == 0
        ? {}
        : state.accountsList.accounts[state.accountsList.selectedIndex],
    showForm: state.accountsList.showForm,
    selectedIndex: state.accountsList.selectedIndex,
  };
};

export default connect(mapStateToProps, { setError, toggleForm })(
  reduxForm({ form: "ChangePassword" })(ChangePassword)
);
