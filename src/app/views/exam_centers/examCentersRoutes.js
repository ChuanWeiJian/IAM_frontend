import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewSchool = lazy(() => import("./new_school/NewSchool"));
const SchoolList = lazy(() => import("./school_list/SchoolList"));
const SchoolInformation = lazy(() =>
  import("./school_information/SchoolInformation")
);
const ExamCenters = lazy(() => import("./examCenters"));
const ExamCenterInformation = lazy(() =>
  import("./exam_center_information/ExamCenterInformation")
);
const EditExamCenter = lazy(() => import("./edit_exam_center/EditExamCenter"));
const examCentersRoutes = [
  {
    path: "/examcenter",
    exact: true,
    component: ExamCenters,
  },
  {
    path: "/school/new",
    exact: true,
    component: NewSchool,
  },
  {
    path: "/school/list",
    exact: true,
    component: SchoolList,
  },
  {
    path: "/school/:schoolId",
    exact: true,
    component: SchoolInformation,
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
