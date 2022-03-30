import { examCenters, AssignmentTasks } from "fake-db/static_data/ExamCenter";
export const GET_EXAM_CENTER_INFORMATION =
  "EXAM-CENTER-INFORMATION GET_EXAM_CENTER_INFORMATION";

export const getExamCenterInformation = (centerId) => {
  const examCenter = examCenters.find((center) => center.id === centerId);
  const assignmentTasks = examCenter.assignmentTasks.map((taskId) =>
    AssignmentTasks.find((task) => task.id === taskId)
  );

  return {
    type: GET_EXAM_CENTER_INFORMATION,
    payload: { examCenter, assignmentTasks },
  };
};
