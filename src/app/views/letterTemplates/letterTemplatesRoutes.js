import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

const NewLetterTemplate = lazy(() =>
  import("./new_letter_template/NewLetterTemplate")
);
const LetterTemplate = lazy(() => import("./letterTemplates"));

const LetterTemplatesList = lazy(() =>
  import("./letter_templates_list/LetterTemplatesList")
);

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
  {
    path: "/letter/list",
    exact: true,
    component: LetterTemplatesList,
  },
];

export default letterTemplatesRoutes;
