import { examCenters } from "fake-db/static_data/AssignmentTask";
export const GET_ALL_EXAM_CENTERS =
  "NEW ASSIGNMENT TASK - GET_ALL_EXAM_CENTERS";

export const getAllExamCenters = () => {
  return {
    type: GET_ALL_EXAM_CENTERS,
    payload: examCenters,
  };
};
