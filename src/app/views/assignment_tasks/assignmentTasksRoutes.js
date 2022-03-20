import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewAssignmentTask = lazy(() =>
  import("./new_assignment_task/NewAssignmentTask")
);
const AssignmentTasks = lazy(() => import("./assignmentTasks"));
const AssignmentTasksList = lazy(() => import("./assignment_tasks_list/AssignmentTaskList"));

const assignmentTasksRoutes = [
  {
    path: "/assignment",
    exact: true,
    component: AssignmentTasks,
  },
  {
    path: "/assignment/new",
    exact: true,
    component: NewAssignmentTask,
  },
  {
    path: "/assignment/list",
    exact: true,
    component: AssignmentTasksList
  }
];

export default assignmentTasksRoutes;
