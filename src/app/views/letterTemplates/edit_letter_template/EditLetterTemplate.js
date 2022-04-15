import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { Breadcrumb } from "@gull";
import swal from "sweetalert2";
import axios from "axios";

import ErrorModal from "app/views/shared/components/ErrorModal";
import Loader from "app/views/shared/components/Loader";
import { initializeForm } from "app/redux/actions/EditLetterTemplateActions";
import { resetError, setError } from "app/redux/actions/ErrorModalActions";
import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormRichTextEditor,
  renderTagsSelector,
} from "app/views/shared/form/form";
import { validateLetterTemplate as validate } from "../shared/validation";

const EditLetterTemplate = (props) => {
  const history = useHistory();
  const templateId = useParams().templateId;

  useEffect(() => {
    props.initializeForm(templateId);
  }, []);

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Saving changes...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: async () => {
        //submit form process here remember to async and await with try...catch block
        try {
          await axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_BACKEND_URL}/letters/${templateId}`,
            data: values,
          }).then((response) => {
            swal.hideLoading();
            swal
              .fire({
                title: "Successfully Edit Letter Template",
                icon: "success",
                allowOutsideClick: false,
              })
              .then((result) => {
                history.push(`/letter/list`);
              });
          });
        } catch (err) {
          swal.hideLoading();
          props.setError(err);
        }
      },
      allowOutsideClick: () => false,
    });
  };

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "Letter Templates", path: "/letter" },
          { name: "Letter Templates List", path: "/letter/list" },
          { name: "Edit Letter Template" },
        ]}
      ></Breadcrumb>
      <div className="2-columns-form-layout">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <h3 className="card-title"> New Letter Template</h3>
                </div>
                <form onSubmit={props.handleSubmit(handleFormSubmit)}>
                  <div className="card-body">
                    <div className="row">
                      <Field
                        className="col-md-6"
                        name="title"
                        type="text"
                        placeholder="Letter Template Title"
                        helpText="Please enter the letter template's title"
                        component={renderMultiColumnFormInputField}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <Field
                        name="content"
                        placeholder="Your letter template content..."
                        title="Letter Template Content"
                        subtitle="Please ensure that the tag is added into the content, or else the compiled letter might lack of information"
                        component={renderMultiColumnFormRichTextEditor}
                      />
                    </div>

                    <div className="custom-separator"></div>

                    <div className="row">
                      <div className="col-md-6">
                        <FieldArray
                          name="tags"
                          letterContent={props.content}
                          changeFunction={props.change}
                          component={renderTagsSelector}
                        />
                      </div>
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

const selector = formValueSelector("EditLetterTemplate");

const mapStateToProps = (state) => {
  return {
    initialValues: state.editLetterTemplate.letterTemplate,
    content: selector(state, "content"),
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  initializeForm,
  setError,
  resetError,
})(
  reduxForm({
    form: "EditLetterTemplate",
    enableReinitialize: true,
    validate: validate,
  })(EditLetterTemplate)
);
