import {
  examCenterData,
  examCenters,
  AssignmentTasks,
  Schools
} from "fake-db/static_data/AssignmentTask";

export const GET_ASSIGNMENT_TASK_INFO =
  "ASSIGNMENT-TASK-INFO GET_ASSIGNMENT_TASK_INFO";

export const getAssignmentTaskInfo = (taskId) => {
  //get assignment task by id & district with resolved exam center and exam center data
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

  let collectedExamCenterData = [];

  if (assignmentTask.status !== "Collection in progress" && assignmentTask.status !== "Collection data incomplete") {
    collectedExamCenterData = examCenterData.filter(
      (data) => data.assignmentTaskId === assignmentTask.id
    );
  }

  return {
    type: GET_ASSIGNMENT_TASK_INFO,
    payload: {
      assignmentTask,
      resolvedExamCenters,
      collectedExamCenterData,
    },
  };
};
