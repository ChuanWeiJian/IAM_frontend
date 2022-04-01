import { examCenters, Schools } from "fake-db/static_data/AssignmentTask";
export const GET_ALL_EXAM_CENTERS =
  "NEW ASSIGNMENT TASK - GET_ALL_EXAM_CENTERS";

export const getAllExamCenters = () => {
  const resolvedExamCenters = examCenters.map((center) => {
    const resolvedSchool = Schools.find(
      (school) => school.id === center.school
    );
    return { ...center, school: resolvedSchool };
  });

  return {
    type: GET_ALL_EXAM_CENTERS,
    payload: resolvedExamCenters,
  };
};
