import { examCenters, Schools } from "fake-db/static_data/ExamCenter";

export const TOGGLE_EXAM_CENTER_LIST =
  "EDIT-EXAM-CENTER TOGGLE_EXAM_CENTER_LIST";
export const INITIALIZE_FORM = "EDIT-EXAM-CENTER INITIALIZE_EXAM_CENTER_FORM";

export const toggleExamCenterListModal = (show) => {
  return {
    type: TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const initializeForm = (centerId) => {
  const resolvedExamCenters = examCenters.map((center) => {
    return {
      ...center,
      school: Schools.find((school) => school.id === center.school),
    };
  });
  const examCenter = resolvedExamCenters.find(
    (center) => center.id === centerId
  );

  return {
    type: INITIALIZE_FORM,
    payload: {
      selectedExamCenter: examCenter,
      examCenters: resolvedExamCenters,
    },
  };
};
