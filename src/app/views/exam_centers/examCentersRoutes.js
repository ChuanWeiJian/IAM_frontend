import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewExamCenter = lazy(() => import("./new_exam_center/NewExamCenter"));
const ExamCenters = lazy(() => import("./examCenters"));

const examCentersRoutes = [
  {
    path: "/examcenter",
    exact: true,
    component: ExamCenters,
  },
  {
    path: "/examcenter/new",
    exact: true,
    component: NewExamCenter,
  },
];

export default examCentersRoutes;
