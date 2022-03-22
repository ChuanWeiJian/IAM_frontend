import React from "react";
import DateTime from "react-datetime";
import { Field } from "redux-form";

const renderError = (meta) => {
  if (meta.touched && meta.error) {
    return <div className="text-danger mt-1 ml-2">{meta.error}</div>;
  }
};

export const renderMultiColumnFormInputField = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <input
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
                <span>{`${item.schoolCode} - ${item.examCenterCode} - ${item.name}`}</span>
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

export const renderEditAssignmentResultField = (formProps) => {
  return (
    <div className={`form-group ${formProps.className || ""}`}>
      <label className="ul-form__label">{formProps.label}</label>
      <select
        {...formProps.input}
        className="form-control"
        onChange={formProps.input.onChange}
      >
        {formProps.options.map((option) => {
          return (
            option.examCenterId !== formProps.originalExamCenterId && (
              <option key={option.id} value={option.id}>
                {`${option.name} - ${option.examCenterCode}`}
              </option>
            )
          );
        })}
      </select>
      {renderError(formProps.meta)}
    </div>
  );
};
