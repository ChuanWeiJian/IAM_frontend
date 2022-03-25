import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewExamCenter = lazy(() => import("./new_exam_center/NewExamCenter"));
const ExamCenters = lazy(() => import("./examCenters"));
const ExamCentersList = lazy(() => import("./exam_center_list/ExamCenterList"));
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
  {
    path: "/examcenter/list",
    exact: true,
    component: ExamCentersList,
  },
];

export default examCentersRoutes;
