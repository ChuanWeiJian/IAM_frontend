import { AssignmentTasks } from "fake-db/static_data/AssignmentTask";
import { getStatus } from "app/views/shared/function/getStatus";

export const GET_ALL_ASSIGNMENT_TASKS =
  "ASSIGNMENT-TASKS-LIST GET_ALL_ASSIGNMENT_TASKS";

export const getAllAssignmentTasks = () => {
  const resolvedAssignmentTasks = AssignmentTasks.map((task, index) => {
    let status = getStatus(task);

    let actions = {
      view: "/assignment/" + task.id,
      edit: "/assignment/edit/" + task.id,
      delete: "/assignment/delete/" + task.id,
    };

    return {
      ...task,
      status: status,
      actions: actions,
      index: index + 1,
    };
  });

  return {
    type: GET_ALL_ASSIGNMENT_TASKS,
    payload: resolvedAssignmentTasks,
  };
};
