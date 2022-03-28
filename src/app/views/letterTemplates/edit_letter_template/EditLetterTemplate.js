import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { Breadcrumb } from "@gull";
import swal from "sweetalert2";
import { LetterTemplates } from "fake-db/static_data/LetterTemplate";
import { initializeForm } from "app/redux/actions/EditLetterTemplateActions";
import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormRichTextEditor,
  renderTagsSelector,
} from "app/views/shared/form/form";
import { validateLetterTemplate as validate } from "../shared/validation";

const EditLetterTemplate = (props) => {
  const history = useHistory();
  const templateId = useParams().templateId;
  const letterTemplate = LetterTemplates.find(
    (template) => template.id === templateId
  );

  useEffect(() => {
    props.initializeForm(letterTemplate);
  }, []);

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Saving changes...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: () => {
        //submit form process here remember to async and await with try...catch block
        console.log(values);
        swal.hideLoading();
        swal
          .fire("Success", "Successful saved the changes", "success")
          .then((result) => {
            history.push("/letter/list");
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  };

  return (
    <div>
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
    initialValues: state.editLetterTemplate,
    content: selector(state, "content"),
  };
};

export default connect(mapStateToProps, { initializeForm: initializeForm })(
  reduxForm({
    form: "EditLetterTemplate",
    enableReinitialize: true,
    validate: validate,
  })(EditLetterTemplate)
);
