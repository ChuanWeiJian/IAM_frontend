import React from "react";
import { Breadcrumb } from "@gull";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import {
  renderMultiColumnFormInputField,
  renderMultiColumnFormRichTextEditor,
  renderTagsSelector,
} from "app/views/shared/form/form";
import { validateLetterTemplate as validate } from "../shared/validation";

const NewLetterTemplate = (props) => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Letter Templates", path: "/letter" },
          { name: "New Letter Template" },
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
                            Create Letter Template
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

const selector = formValueSelector("NewLetterTemplate");

const mapStateToProps = (state) => {
  return { content: selector(state, "content") };
};

export default connect(mapStateToProps)(
  reduxForm({ form: "NewLetterTemplate", validate: validate })(NewLetterTemplate)
);
