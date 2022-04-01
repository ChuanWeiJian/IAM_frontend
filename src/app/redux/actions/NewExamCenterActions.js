import { examCenters, Schools } from "fake-db/static_data/ExamCenter";

export const GET_ALL_EXAM_CENTERS = "NEW-EXAM-CENTER GET_ALL_EXAM_CENTER";
export const TOGGLE_EXAM_CENTER_LIST =
  "NEW-EXAM-CENTER TOGGLE_EXAM_CENTER_LIST";

export const toggleExamCenterListModal = (show) => {
  return {
    type: TOGGLE_EXAM_CENTER_LIST,
    payload: show,
  };
};

export const getAllExamCenters = () => {
  const resolvedExamCenters = examCenters.map((center) => {
    return {
      ...center,
      school: Schools.find((school) => school.id === center.school),
    };
  });
  return {
    type: GET_ALL_EXAM_CENTERS,
    payload: resolvedExamCenters,
  };
};
