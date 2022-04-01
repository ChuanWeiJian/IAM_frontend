import {
  AssignmentTasks,
  examCenters,
  Schools
} from "fake-db/static_data/AssignmentTask";

export const INITIALIZE_ASSIGNMENT_TASK_FORM =
  "EDIT-ASSIGNMENT-TASK INITIALIZE_ASSIGNMENT_TASK_FORM";

export const initializeForm = (taskId) => {
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);

  const resolvedExamCenters = examCenters.map((center) => {
    const resolvedSchool = Schools.find(
      (school) => school.id === center.school
    );
    return { ...center, school: resolvedSchool };
  });

  return {
    type: INITIALIZE_ASSIGNMENT_TASK_FORM,
    payload: { assignmentTask, examCenters: resolvedExamCenters },
  };
};
