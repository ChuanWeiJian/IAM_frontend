import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const NewSchool = lazy(() => import("./new_school/NewSchool"));
const SchoolList = lazy(() => import("./school_list/SchoolList"));
const SchoolInformation = lazy(() =>
  import("./school_information/SchoolInformation")
);
const EditSchoolInformation = lazy(() =>
  import("./edit_school_information/EditSchoolInformation")
);
const ExamCenters = lazy(() => import("./examCenters"));
const ExamCenterInformation = lazy(() =>
  import("./exam_center_information/ExamCenterInformation")
);

const examCentersRoutes = [
  {
    path: "/examcenter",
    exact: true,
    component: ExamCenters,
    auth: authRoles.officer
  },
  {
    path: "/school/new",
    exact: true,
    component: NewSchool,
    auth: authRoles.officer
  },
  {
    path: "/school/list",
    exact: true,
    component: SchoolList,
    auth: authRoles.officer
  },
  {
    path: "/school/:schoolId",
    exact: true,
    component: SchoolInformation,
    auth: authRoles.officer
  },
  {
    path: "/school/edit/:schoolId",
    exact: true,
    component: EditSchoolInformation,
    auth: authRoles.officer
  },
  {
    path: "/examcenter/:centerId",
    exact: true,
    component: ExamCenterInformation,
    auth: authRoles.officer
  },
];

export default examCentersRoutes;
