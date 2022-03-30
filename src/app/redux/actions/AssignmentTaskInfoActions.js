import {
  examCenterData,
  examCenters,
  AssignmentTasks,
} from "fake-db/static_data/AssignmentTask";
import { getStatus } from "app/views/shared/function/getStatus";

export const GET_ASSIGNMENT_TASK_INFO =
  "ASSIGNMENT-TASK-INFO GET_ASSIGNMENT_TASK_INFO";

export const getAssignmentTaskInfo = (taskId) => {
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  const involvedExamCenters = assignmentTask.examCenters.map((id) =>
    examCenters.find((examcenter) => examcenter.id === id)
  );

  const status = getStatus(assignmentTask);
  let collectedExamCenterData = [];

  if (status !== "Collection in progress") {
    collectedExamCenterData = examCenterData.filter(
      (data) => data.assignmentTaskId === assignmentTask.id
    );
  }

  return {
    type: GET_ASSIGNMENT_TASK_INFO,
    payload: {
      assignmentTask,
      involvedExamCenters,
      status,
      collectedExamCenterData,
    },
  };
};
