import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

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

const EditAssignmentTask = lazy(() =>
  import("./edit_assignment_task/EditAssignmentTask.js")
);

const EditAssignmentResult = lazy(() =>
  import("./edit_assignment_result/EditAssignmentResult")
);

const CompileLetter = lazy(() => import("./compile_letter/CompileLetter"));

const assignmentTasksRoutes = [
  {
    path: "/assignment",
    exact: true,
    component: AssignmentTasks,
    auth: authRoles.officer,
  },
  {
    path: "/assignment/new",
    exact: true,
    component: NewAssignmentTask,
    auth: authRoles.officer,
  },
  {
    path: "/assignment/list",
    exact: true,
    component: AssignmentTasksList,
    auth: authRoles.officer,
  },
  {
    path: "/assignment/:taskId",
    exact: true,
    component: AssignmentTaskInfo,
    auth: authRoles.officer,
  },
  {
    path: "/assignment/result/:role/:taskId",
    exact: true,
    component: AssignmentResultSummary,
    auth: authRoles.officer,
  },
  {
    path: "/assignment/edit/:taskId",
    exact: true,
    component: EditAssignmentTask,
    auth: authRoles.officer,
  },
  {
    path: "/assignment/result/edit/:role/:taskId",
    exact: true,
    component: EditAssignmentResult,
    auth: authRoles.officer,
  },
  {
    path: "/assignment/letter/:role/:taskId",
    exact: true,
    component: CompileLetter,
    auth: authRoles.officer,
  },
];

export default assignmentTasksRoutes;
