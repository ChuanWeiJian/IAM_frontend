import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewSchool = lazy(() => import("./new_school/NewSchool"));
const NewExamCenter = lazy(() => import("./new_exam_center/NewExamCenter"));
const ExamCenters = lazy(() => import("./examCenters"));
const ExamCentersList = lazy(() => import("./exam_center_list/ExamCenterList"));
const ExamCenterInformation = lazy(() =>
  import("./exam_center_information/ExamCenterInformation")
);
const EditExamCenter = lazy(() => import("./edit_exam_center/EditExamCenter"));
const examCentersRoutes = [
  {
    path: "/school/new",
    exact: true,
    component: NewSchool,
  },
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
  {
    path: "/examcenter/:centerId",
    exact: true,
    component: ExamCenterInformation,
  },
  {
    path: "/examcenter/edit/:centerId",
    exact: true,
    component: EditExamCenter,
  },
];

export default examCentersRoutes;
