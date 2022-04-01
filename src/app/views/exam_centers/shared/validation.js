export const validateExamCenter = (values) => {
  const errors = {};

  if (!values.schoolCode) {
    errors.schoolCode = "Please enter the school code";
  }

  if (!values.examCenterCode) {
    errors.examCenterCode = "Please enter the exam center code";
  }

  if (!values.name) {
    errors.name = "Please enter the exam center name";
  }

  if (!values.address) {
    errors.address = "Please enter the exam center address";
  }
  return errors;
};

export const validateSchool = (values) => {
  const errors = {};

  if (!values.schoolCode) {
    errors.schoolCode = "Please enter the school code";
  }

  if (!values.name) {
    errors.name = "Please enter the school name";
  }

  if (!values.address) {
    errors.address = "Please enter the school address";
  }
  return errors;
};
