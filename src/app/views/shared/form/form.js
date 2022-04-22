import React from "react";
import DateTime from "react-datetime";
import { SimpleCard, RichTextEditor } from "@gull";
import { Field } from "redux-form";
import { tagFieldsOptions } from "fake-db/static_data/LetterTemplate";
import { Form } from "react-bootstrap";

const renderError = (meta) => {
  if (meta.touched && meta.error) {
    return <div className="text-danger mt-1 ml-2">{meta.error}</div>;
  }
};

export const renderMultiColumnFormInputField = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <input
        readOnly={formProps.readOnly}
        type={formProps.type}
        {...formProps.input}
        placeholder={formProps.placeholder}
        className="form-control"
      ></input>
      <small className="ul-form__text form-text ">{formProps.helpText}</small>
      {renderError(formProps.meta)}
    </div>
  );
};

export const renderMultiColumnFormSelect = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <select
        className="form-control"
        {...formProps.input}
        onChange={formProps.input.onChange}
      >
        <option value="">{formProps.defaultOption}</option>
        {formProps.items.map((item) => (
          <option key={item.id} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
      <small className="ul-form__text form-text ">{formProps.helpText}</small>
      {renderError(formProps.meta)}
    </div>
  );
};

export const renderMultiColumnFormDateTimeField = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <DateTime
        name={formProps.name}
        closeOnSelect={true}
        onChange={formProps.input.onChange}
        isValidDate={formProps.isValidDate}
        timeFormat="HH:mm"
        dateFormat="DD/MM/YYYY"
        placeholder={formProps.placeholder}
        value={formProps.input.value}
      />
      <small className="ul-form__text form-text ">{formProps.helpText}</small>
      {renderError(formProps.meta)}
    </div>
  );
};

export const renderMultipleColumnFormExamCentersCheckboxGroup = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <label className="ul-form__label">Exam Centers: </label>
      <div className="row">
        {formProps.items.map((item, index) => {
          return (
            <div className="form-group col-md-6" key={index}>
              <label className="checkbox checkbox-primary">
                <input
                  type="checkbox"
                  name={`${formProps.input.name}[${index}]`}
                  value={item.id}
                  checked={formProps.input.value.indexOf(item.id) !== -1}
                  onChange={(event) => {
                    const newValue = [...formProps.input.value];
                    if (event.target.checked) {
                      newValue.push(item.id);
                    } else {
                      newValue.splice(newValue.indexOf(item.id), 1);
                    }

                    return formProps.input.onChange(newValue);
                  }}
                />
                <span>{`${item.school.schoolCode} - ${item.examCenterCode} - ${item.school.schoolName}`}</span>
                <span className="checkmark"></span>
              </label>
            </div>
          );
        })}
      </div>
      {renderError(formProps.meta)}
    </div>
  );
};

export const renderInvigilatorOptions = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <select
        {...formProps.input}
        className="form-control"
        onChange={formProps.input.onChange}
      >
        {formProps.options.map((option) => {
          return (
            option.user.school.id !== formProps.assigningSchoolId && (
              <option key={option.id} value={option.id}>
                {`${option.teacherName} - ${option.user.school.schoolCode}`}
              </option>
            )
          );
        })}
      </select>
      {renderError(formProps.meta)}
    </div>
  );
};

export const renderEditAssignmentResultArrayField = (formProps) => {
  return (
    <div className="col-md-4">
      <label className="ul-form__label">{formProps.label}</label>
      <div className="row">
        {formProps.fields.map((invigilator, index) => {
          return (
            <Field
              key={invigilator}
              className="col-lg-12"
              name={invigilator}
              options={formProps.options}
              assigningSchoolId={formProps.schoolId}
              component={renderInvigilatorOptions}
            />
          );
        })}
      </div>
    </div>
  );
};

export const renderMultiColumnFormRichTextEditor = (formProps) => {
  return (
    <div className="col-md-12">
      <SimpleCard title={formProps.title} subtitle={formProps.subtitle}>
        <RichTextEditor
          {...formProps.input}
          content={formProps.input.value}
          handleContentChange={formProps.input.onChange}
          placeholder={formProps.placeholder}
        />
      </SimpleCard>
      {renderError(formProps.meta)}
    </div>
  );
};

const renderTagSelectField = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <div className="row">
        <label className="ul-form__label ul-form--margin col-lg-1 col-form-label ">
          {formProps.label}
        </label>
        <div className="col-lg-8">
          <select
            className="form-control"
            {...formProps.input}
            onChange={formProps.input.onChange}
          >
            <option value="">{formProps.defaultOption}</option>
            {formProps.items.map((item) => (
              <option key={item.id} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-3">
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={() => {
              const removedTag = "&lt;" + (formProps.index + 1) + "&gt;";
              let newLetterContent = formProps.letterContent.replace(
                removedTag,
                ""
              );
              if (formProps.index < formProps.fieldLength) {
                for (
                  var idx = formProps.index + 1;
                  idx < formProps.fieldLength;
                  idx++
                ) {
                  const modifiedTag = "&lt;" + (idx + 1) + "&gt;";
                  const newTag = "&lt;" + idx + "&gt;";
                  newLetterContent = newLetterContent.replace(
                    modifiedTag,
                    newTag
                  );
                }
              }
              formProps.changeFunction("content", newLetterContent);
              formProps.onRemoveTag(formProps.index);
            }}
          >
            Remove Tag
          </button>
        </div>
      </div>
      {renderError(formProps.meta)}
    </div>
  );
};

export const renderTagsSelector = (formProps) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <button
          type="button"
          className="btn btn-outline-secondary m-1"
          onClick={() => {
            formProps.fields.push({});
            let newLetterContent;
            if (formProps.letterContent) {
              newLetterContent =
                formProps.letterContent +
                "&lt;" +
                (formProps.fields.length + 1) +
                "&gt;";
            } else {
              newLetterContent =
                "&lt;" + (formProps.fields.length + 1) + "&gt;";
            }
            formProps.changeFunction("content", newLetterContent);
          }}
        >
          Add New Tag
        </button>
      </div>

      <div className="custom-separator"></div>

      {formProps.fields.map((tag, index) => (
        <Field
          key={index}
          className="col-md-12"
          label={`<${index + 1}>`}
          name={`${tag}.value`}
          component={renderTagSelectField}
          defaultOption="Please select a field"
          onRemoveTag={formProps.fields.remove}
          changeFunction={formProps.changeFunction}
          letterContent={formProps.letterContent}
          index={index}
          fieldLength={formProps.fields.length}
          items={tagFieldsOptions}
        />
      ))}
    </div>
  );
};

export const renderLetterTemplateRadio = (formProps) => {
  return (
    <React.Fragment>
      <Form.Check
        type="radio"
        label={formProps.label}
        {...formProps.input}
        value={formProps.radioValue}
      />
      {renderError(formProps.meta)}
    </React.Fragment>
  );
};
