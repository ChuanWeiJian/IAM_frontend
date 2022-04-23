import { lazy } from "react";

const Dashboard1 = lazy(() => import("./dashboard1/Dashboard1"));

const Dashboard2 = lazy(() => import("./dashboard2/Dashboard2"));

const dashboardRoutes = [
  {
    path: "/dashboard/v1",
    component: Dashboard1,
  },
  {
    path: "/dashboard/v2",
    component: Dashboard2,
  },
];

export default dashboardRoutes;
