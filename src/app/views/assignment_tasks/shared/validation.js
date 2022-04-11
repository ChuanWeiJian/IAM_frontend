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

  if (!values.examCenters || values.examCenters.length === 0) {
    errors.examCenters = "Must select at least one exam center";
  }

  return errors;
};

export const validateAssignmentResult = (values) => {
  const errors = {};
  for (let key in values) {
    errors[key] = new Array(values[key].length);
  }
  let duplicate = false;

  for (let key in values) {
    const valueArray = values[key];
    for (let value of valueArray) {
      if (valueArray.indexOf(value) !== valueArray.lastIndexOf(value)) {
        errors[key][valueArray.indexOf(value)] =
          "The invigilator cannot be the same";
        errors[key][valueArray.lastIndexOf(value)] =
          "The invigilator cannot be the same";
        duplicate = true;
        break;
      }

      for (let innerKey in values) {
        if (innerKey === key) {
          continue;
        }

        const innerKeyValueArray = values[innerKey];
        for (let innerValue of innerKeyValueArray) {
          if (value === innerValue) {
            errors[key][valueArray.indexOf(value)] =
              "The invigilator cannot be the same";
            errors[innerKey][innerKeyValueArray.indexOf(value)] =
              "The invigilator cannot be the same";
            duplicate = true;
            break;
          }
        }
      }
    }

    if (duplicate) {
      break;
    }
  }

  return errors;
};

export const validateCompileLetterTemplate = (values) => {
  const errors = {};
  if (!values.letterTemplate) {
    errors.letterTemplate = "Please select the letter template";
  }

  return errors;
};
