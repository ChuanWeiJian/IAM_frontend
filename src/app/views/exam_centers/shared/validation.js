export const validateExamCenter = (values) => {
  const errors = {};

  if (!values.examCenterCode) {
    errors.examCenterCode = "Please enter the exam center code";
  }

  if (!values.safeRoomNo) {
    errors.safeRoomNo = "Please enter the safe room number";
  }

  return errors;
};

export const validateSchool = (values) => {
  const errors = {};

  if (!values.schoolCode) {
    errors.schoolCode = "Please enter the school code";
  }

  if (!values.schoolName) {
    errors.schoolName = "Please enter the school name";
  }

  if (!values.schoolAddress) {
    errors.schoolAddress = "Please enter the school address";
  }

  if (!values.postcode) {
    errors.postcode = "Please enter the postcode";
  }

  if (!values.city) {
    errors.city = "Please enter the city";
  }

  if (!values.stateCode) {
    errors.stateCode = "Please enter the state code";
  }

  if (!values.areaCode) {
    errors.areaCode = "Please enter the area code";
  }

  if (!values.taxNumber) {
    errors.taxNumber = "Please enter the tax number";
  }

  if (!values.typeOfSchool) {
    errors.typeOfSchool = "Please select the type of school";
  }

  if (!values.codeDun) {
    errors.codeDun = "Please enter the code DUN";
  }

  if (!values.codeParlimen) {
    errors.codeParlimen = "Please enter the code Parlimen";
  }

  if (!values.schoolPhoneNumber) {
    errors.schoolPhoneNumber = "Please enter the school's phone number";
  }

  if (!values.schoolEmailAddress) {
    errors.schoolEmailAddress = "Please enter the school's email address";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      values.schoolEmailAddress
    )
  ) {
    errors.schoolEmailAddress = "Please enter a valid school's email address";
  }

  return errors;
};
