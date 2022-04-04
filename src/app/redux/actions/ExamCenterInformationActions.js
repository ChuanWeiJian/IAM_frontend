import {
  examCenters,
  AssignmentTasks,
  Schools,
} from "fake-db/static_data/ExamCenter";
export const GET_EXAM_CENTER_INFORMATION =
  "EXAM-CENTER-INFORMATION GET_EXAM_CENTER_INFORMATION";

export const getExamCenterInformation = (centerId) => {
  //get exam center by id & district with resolved school & assignment tasks
  const examCenter = examCenters.find((center) => center.id === centerId);
  const resolvedExamCenter = {
    ...examCenter,
    school: Schools.find((school) => school.id === examCenter.school),
  };

  const assignmentTasks = examCenter.assignmentTasks.map((taskId) =>
    AssignmentTasks.find((task) => task.id === taskId)
  );
  
  return {
    type: GET_EXAM_CENTER_INFORMATION,
    payload: { examCenter: resolvedExamCenter, assignmentTasks },
  };
};
