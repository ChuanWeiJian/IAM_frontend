export const validateUserAccount = (values) => {
  const errors = {};

  if (!values.login) {
    errors.login = "Please enter the user login";
  }
  if (!values.password) {
    errors.password = "Please enter the user password";
  }
  if (!values.district) {
    errors.district = "Please select a district";
  }

  return errors;
};

export const validateEditAccount = (values) => {
  const errors = {};

  if (!values.login) {
    errors.login = "Please enter the user login";
  }

  if (!values.district) {
    errors.district = "Please select a district";
  }

  if (!values.status) {
    errors.status = "Please select a status";
  }
  return errors;
};
