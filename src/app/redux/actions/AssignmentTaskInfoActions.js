import {
  examCenterData,
  examCenters,
  AssignmentTasks,
  Schools
} from "fake-db/static_data/AssignmentTask";
import { getStatus } from "app/views/shared/function/getStatus";

export const GET_ASSIGNMENT_TASK_INFO =
  "ASSIGNMENT-TASK-INFO GET_ASSIGNMENT_TASK_INFO";

export const getAssignmentTaskInfo = (taskId) => {
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  const involvedExamCenters = assignmentTask.examCenters.map((id) =>
    examCenters.find((examcenter) => examcenter.id === id)
  );

  const resolvedExamCenters = involvedExamCenters.map((center) => {
    const resolvedSchool = Schools.find(
      (school) => school.id === center.school
    );
    return { ...center, school: resolvedSchool };
  })

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
      resolvedExamCenters,
      status,
      collectedExamCenterData,
    },
  };
};
