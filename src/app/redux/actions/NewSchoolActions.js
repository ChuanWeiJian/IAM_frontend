import { Schools } from "fake-db/static_data/ExamCenter";

export const GET_ALL_SCHOOLS = "NEW-SCHOOL GET_ALL_SCHOOLS";
export const TOGGLE_SCHOOL_LIST =
  "NEW-SCHOOL TOGGLE_SCHOOL_LIST";

export const toggleSchoolListModal = (show) => {
  return {
    type: TOGGLE_SCHOOL_LIST,
    payload: show,
  };
};

export const getAllSchools = () => {
  return {
    type: GET_ALL_SCHOOLS,
    payload: Schools,
  };
};
