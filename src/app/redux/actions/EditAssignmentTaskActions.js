import {
  AssignmentTasks,
  examCenters,
} from "fake-db/static_data/AssignmentTask";

export const INITIALIZE_ASSIGNMENT_TASK_FORM =
  "EDIT-ASSIGNMENT-TASK INITIALIZE_ASSIGNMENT_TASK_FORM";

export const initializeForm = (taskId) => {
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);

  return {
    type: INITIALIZE_ASSIGNMENT_TASK_FORM,
    payload: {assignmentTask, examCenters}
  };
};
