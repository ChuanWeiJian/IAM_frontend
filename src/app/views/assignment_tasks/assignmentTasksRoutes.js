import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewAssignmentTask = lazy(() =>
  import("./new_assignment_task/NewAssignmentTask")
);
const AssignmentTasks = lazy(() => import("./assignmentTasks"));

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
];

export default assignmentTasksRoutes;
