import { examCenters, Schools } from "fake-db/static_data/ExamCenter";

export const GET_SCHOOL_LIST_DATA = "SCHOOL-LIST GET_SCHOOL_LIST_DATA";
export const TOGGLE_FORM = "SCHOOL-LIST TOGGLE_FORM";
export const SET_SELECTED_INDEX = "SCHOOL-LIST SET_SELECTED_INDEX";
export const TOGGLE_EXAM_CENTER_LIST = "SCHOOL-LIST TOGGLE_EXAM_CENTER_LIST";

export const getSchoolListData = () => {
  const resolvedSchools = Schools.map((school, index) => {
    let actions = {
      view: "/school/" + school.id,
      edit: "/school/edit/" + school.id,
      delete: "/school/delete/" + school.id,
    };

    return {
      ...school,
      actions: actions,
      index: index + 1,
    };
  });

  const resolvedExamCenters = examCenters.map((center, index) => {
    const resolvedSchool = Schools.find(
      (school) => school.id === center.school
    );

    return {
      ...center,
      school: resolvedSchool,
    };
  });

  return {
    type: GET_SCHOOL_LIST_DATA,
    payload: { schools: resolvedSchools, examCenters: resolvedExamCenters },
  };
};

export const toggleForm = (show) => {
  return {
    type: TOGGLE_FORM,
    payload: show,
  };
};

export const setSelectedIndex = (index) => {
  return {
    type: SET_SELECTED_INDEX,
    payload: index,
  };
};

export const toggleExamCenterListModal = (show) => {
  return {
    type: TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};
