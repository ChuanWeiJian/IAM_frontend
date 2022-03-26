import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { Breadcrumb } from "@gull";
import { Field, reduxForm } from "redux-form";
import SweetAlert from "sweetalert2-react";
import { renderMultiColumnFormInputField } from "app/views/shared/form/form";
import ExamCenterListModal from "../shared/components/ExamCenterListModal";
import { examCenters } from "fake-db/static_data/ExamCenter";
import { validateExamCenter as validate } from "../shared/validation";
import {
  toggleAlert,
  toggleExamCenterListModal,
  toggleError,
  setError,
  initializeForm,
} from "app/redux/actions/EditExamCenterActions";

const EditExamCenter = (props) => {
  const centerId = useParams().centerId;

  useEffect(() => {
    const examCenter = examCenters.find((center) => center.id === centerId);
    props.initializeForm(examCenter);
  }, [centerId]);

  const history = useHistory();

  const handleFormSubmit = (values) => {
    console.log(values);
    const success = false;

    if (success) {
      props.toggleAlert(true);
    } else {
      const error = { message: "Duplicate exam center code" };
      props.setError(error);
      props.toggleError(true);
    }
  };

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Exam Centers", path: "/examcenter" },
          { name: "Exam Centers List", path: "/examcenter/list" },
          { name: "Edit Exam Center" },
        ]}
      ></Breadcrumb>
      <SweetAlert
        show={props.mechanism.showAlert}
        title="Changes Saved Success"
        type="success"
        onConfirm={() => {
          props.toggleAlert(false);
          history.push("/");
        }}
      />
      <SweetAlert
        show={props.mechanism.showError}
        title="Changes Saved Failed"
        type="error"
        html={renderToStaticMarkup(
          <>
            <h3>Error</h3>
            <p>Message: {props.mechanism.submitError.message}</p>
          </>
        )}
        onConfirm={() => {
          props.toggleError(false);
        }}
      />
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> Edit Exam Center</h3>
                </div>
                <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                  <div className="card-body">
                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="schoolCode"
                        placeholder="School Code"
                        helpText="Please enter the school code"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-4"
                        type="text"
                        name="examCenterCode"
                        placeholder="Exam Center Code"
                        helpText="Please enter the unique exam center code"
                        component={renderMultiColumnFormInputField}
                      />
                      <div className="col-md-2">
                        <ExamCenterListModal
                          items={examCenters}
                          toggleModal={props.toggleExamCenterListModal}
                          showModal={props.mechanism.showModal}
                        />
                      </div>
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        className="col-md-6"
                        type="text"
                        name="name"
                        placeholder="Exam Center Name"
                        helpText="Please enter the exam center name"
                        component={renderMultiColumnFormInputField}
                      />
                      <Field
                        className="col-md-6"
                        type="text"
                        name="address"
                        placeholder="Exam Center Address"
                        helpText="Please enter the exam center address"
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

const mapStateToProps = (state) => {
  return {
    mechanism: state.editExamCenter.mechanism,
    initialValues: state.editExamCenter.initialValues,
  };
};

export default connect(mapStateToProps, {
  initializeForm: initializeForm,
  toggleAlert: toggleAlert,
  toggleExamCenterListModal: toggleExamCenterListModal,
  toggleError: toggleError,
  setError: setError,
})(
  reduxForm({
    form: "EditExamCenter",
    enableReinitialize: true,
    validate: validate,
  })(EditExamCenter)
);
