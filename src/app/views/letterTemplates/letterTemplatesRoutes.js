import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewLetterTemplate = lazy(() =>
  import("./new_letter_template/NewLetterTemplate")
);
const LetterTemplate = lazy(() => import("./letterTemplates"));

const letterTemplatesRoutes = [
  {
    path: "/letter",
    exact: true,
    component: LetterTemplate,
  },
  {
    path: "/letter/new",
    exact: true,
    component: NewLetterTemplate,
  },
];

export default letterTemplatesRoutes;
