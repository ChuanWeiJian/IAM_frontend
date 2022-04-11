import { AssignmentTasks } from "fake-db/static_data/AssignmentTask";

export const GET_ALL_ASSIGNMENT_TASKS =
  "ASSIGNMENT-TASKS-LIST GET_ALL_ASSIGNMENT_TASKS";

export const getAllAssignmentTasks = () => {
  //get all assignment tasks by district
  //resolve the actions
  const resolvedAssignmentTasks = AssignmentTasks.map((task, index) => {

    let actions = {
      view: "/assignment/" + task.id,
      edit: "/assignment/edit/" + task.id,
      delete: "/assignment/delete/" + task.id,
    };

    return {
      ...task,
      actions: actions,
      index: index + 1,
    };
  });

  return {
    type: GET_ALL_ASSIGNMENT_TASKS,
    payload: resolvedAssignmentTasks,
  };
};
