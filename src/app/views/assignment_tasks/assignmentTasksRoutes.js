import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewAssignmentTask = lazy(() =>
  import("./new_assignment_task/NewAssignmentTask")
);
const AssignmentTasks = lazy(() => import("./assignmentTasks"));
const AssignmentTasksList = lazy(() =>
  import("./assignment_tasks_list/AssignmentTaskList")
);
const AssignmentTaskInfo = lazy(() =>
  import("./assignment_task_info/AssignmentTaskInfo")
);

const AssignmentResultSummary = lazy(() =>
  import("./assignment_result_summary/AssignmentResultSummary")
);

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
    component: AssignmentTasksList,
  },
  {
    path: "/assignment/:taskId",
    exact: true,
    component: AssignmentTaskInfo,
  },
  {
    path: "/assignment/result/:role/:taskId",
    exact: true,
    component: AssignmentResultSummary,
  },
];

export default assignmentTasksRoutes;
