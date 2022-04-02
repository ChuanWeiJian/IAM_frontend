import { examCenters, Schools } from "fake-db/static_data/ExamCenter";

export const GET_SCHOOL_INFORMATION_BY_ID =
  "SCHOOL-INFORMATION GET_SCHOOL_INFORMATION_BY_ID";
export const TOGGLE_FORM = "EDIT-EXAM-CENTER TOGGLE_FORM";
export const TOGGLE_EXAM_CENTER_LIST =
  "EDIT-EXAM-CENTER TOGGLE_EXAM_CENTER_LIST";
export const INITIALIZE_FORM = "EDIT-EXAM-CENTER INITIALIZE_FORM";

export const getSchoolInformationById = (schoolId) => {
  const school = Schools.find((school) => school.id === schoolId);
  const resolvedExamCenters = school.examCenters.map((centerId, index) => {
    const resolvedExamCenter = examCenters.find(
      (center) => center.id === centerId
    );

    return {
      ...resolvedExamCenter,
      actions: {
        view: "/examcenter/" + centerId,
        delete: "/examcenter/delete/" + centerId,
      },
      index: index + 1,
    };
  });

  const resolvedSchool = {
    ...school,
    examCenters: resolvedExamCenters,
  };

  const examCentersList = examCenters.map((center) => {
    return {
      ...center,
      school: Schools.find((school) => school.id === center.school),
    };
  });

  return {
    type: GET_SCHOOL_INFORMATION_BY_ID,
    payload: { school: resolvedSchool, examCenters: examCentersList },
  };
};

export const toggleForm = (show) => {
  return {
    type: TOGGLE_FORM,
    payload: show,
  };
};

export const toggleExamCenterListModal = (show) => {
  return {
    type: TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const initializeForm = (index) => {
  return {
    type: INITIALIZE_FORM,
    payload: index,
  };
};
