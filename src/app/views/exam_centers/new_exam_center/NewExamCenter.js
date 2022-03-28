import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { Breadcrumb } from "@gull";
import { Field, reduxForm } from "redux-form";
import swal from "sweetalert2";
import { renderMultiColumnFormInputField } from "app/views/shared/form/form";
import ExamCenterListModal from "../shared/components/ExamCenterListModal";
import { examCenters, examSecretaries } from "fake-db/static_data/ExamCenter";
import { validateExamCenter as validate } from "../shared/validation";
import {
  toggleAlert,
  toggleExamCenterListModal,
  toggleError,
  setExamSecretary,
  setError,
} from "app/redux/actions/NewExamCenterActions";

const NewExamCenter = (props) => {
  const history = useHistory();

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Registering new exam center...",
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
            history.push(`/examcenter/list`);
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  };

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Exam Centers", path: "/examcenter" },
          { name: "New Exam Center" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> New Exam Center</h3>
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
                          showModal={props.showModal}
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
  );
};

const mapStateToProps = (state) => {
  return state.newExamCenter;
};

export default connect(mapStateToProps, {
  toggleExamCenterListModal: toggleExamCenterListModal,
})(reduxForm({ form: "NewExamCenter", validate: validate })(NewExamCenter));
