import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const NewLetterTemplate = lazy(() =>
  import("./new_letter_template/NewLetterTemplate")
);
const LetterTemplate = lazy(() => import("./letterTemplates"));

const LetterTemplatesList = lazy(() =>
  import("./letter_templates_list/LetterTemplatesList")
);

const LetterTemplateContent = lazy(() =>
  import("./letter_template_content/LetterTemplateContent")
);

const EditLetterTemplate = lazy(() =>
  import("./edit_letter_template/EditLetterTemplate")
);

const letterTemplatesRoutes = [
  {
    path: "/letter",
    exact: true,
    component: LetterTemplate,
    auth: authRoles.officer
  },
  {
    path: "/letter/new",
    exact: true,
    component: NewLetterTemplate,
    auth: authRoles.officer
  },
  {
    path: "/letter/list",
    exact: true,
    component: LetterTemplatesList,
    auth: authRoles.officer
  },
  {
    path: "/letter/:templateId",
    exact: true,
    component: LetterTemplateContent,
    auth: authRoles.officer
  },
  {
    path: "/letter/edit/:templateId",
    exact: true,
    component: EditLetterTemplate,
    auth: authRoles.officer
  },
];

export default letterTemplatesRoutes;
