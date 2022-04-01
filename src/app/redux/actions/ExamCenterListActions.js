import { examCenters, Schools } from "fake-db/static_data/ExamCenter";
export const GET_ALL_EXAM_CENTERS = "EXAM-CENTER-LIST GET_ALL_EXAM_CENTERS";

export const getAllExamCenters = () => {
  const resolvedExamCenters = examCenters.map((center, index) => {
    const resolvedSchool = Schools.find(
      (school) => school.id === center.school
    );

    let actions = {
      view: "/examcenter/" + center.id,
      edit: "/examcenter/edit/" + center.id,
      delete: "/examcenter/delete/" + center.id,
    };

    return {
      ...center,
      school: resolvedSchool,
      actions: actions,
      index: index + 1,
    };
  });

  return {
    type: GET_ALL_EXAM_CENTERS,
    payload: resolvedExamCenters,
  };
};
