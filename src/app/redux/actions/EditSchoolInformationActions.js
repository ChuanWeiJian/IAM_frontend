import { Schools } from "fake-db/static_data/ExamCenter";

export const INITIALIZE_FORM = "EDIT-SCHOOL-INFORMATION INITIALIZE_FORM";
export const TOGGLE_SCHOOL_LIST = "EDIT-SCHOOL-INFORMATION TOGGLE_SCHOOL_LIST";

export const toggleSchoolListModal = (show) => {
  return {
    type: TOGGLE_SCHOOL_LIST,
    payload: show,
  };
};

export const initializeForm = (schoolId) => {
  //get all schools
  //find the school by id
  const selectedSchool = Schools.find((school) => school.id === schoolId);
  return {
    type: INITIALIZE_FORM,
    payload: { schools: Schools, selectedSchool: selectedSchool },
  };
};
