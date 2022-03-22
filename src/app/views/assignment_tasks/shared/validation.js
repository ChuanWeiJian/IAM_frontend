import moment from "moment";

export const validateAssignmentTask = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Please enter the title";
  }

  if (!values.examType || values.examType === "") {
    errors.examType = "Please select the exam type";
  }

  if (!values.collectionDate) {
    errors.collectionDate = "Please select the deadline of data collection";
  }

  if (!values.assignmentDate) {
    errors.assignmentDate =
      "Please select the deadline of invigilators assignment";
  }

  if (
    values.collectionDate &&
    values.assignmentDate &&
    values.collectionDate.isSameOrAfter(values.assignmentDate)
  ) {
    errors.collectionDate =
      "Invigilator Assignment Deadline must fall after Data Collection Deadline";
  }

  if (!values.examCenters || values.examCenters.length === 0) {
    errors.examCenters = "Must select at least one exam center";
  }

  return errors;
};

export const validateAssignmentResult = (values) => {
  const errors = {};
  let duplicate = false;

  for (let key in values) {
    const value = values[key];
    for (let innerKey in values) {
      if (key === innerKey) {
        continue;
      }

      if (value === values[innerKey]) {
        errors[key] = "The invigilator is same with other exam center";
        errors[innerKey] = "The invigilator is same with other exam center";
        duplicate = true;
        break;
      }
    }
    if (duplicate) {
      break;
    }
  }

  return errors;
};