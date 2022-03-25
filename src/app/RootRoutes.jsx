import React from "react";
import { Redirect } from "react-router-dom";
import dashboardRoutes from "./views/dashboard/dashboardRoutes";
import sessionsRoutes from "./views/sessions/sessionsRoutes";
import assignmentTasksRoutes from "./views/assignment_tasks/assignmentTasksRoutes";
import letterTemplatesRoutes from "./views/letterTemplates/letterTemplatesRoutes";
import examCentersRoutes from "./views/exam_centers/examCentersRoutes";
import AuthGuard from "./auth/AuthGuard";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/v1" />,
  },
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  },
];

const routes = [
  ...sessionsRoutes,
  {
    path: "/",
    component: AuthGuard,
    routes: [
      ...dashboardRoutes,
      ...assignmentTasksRoutes,
      ...letterTemplatesRoutes,
      ...examCentersRoutes,
      ...redirectRoute,
      ...errorRoute,
    ],
  },
];

export default routes;
