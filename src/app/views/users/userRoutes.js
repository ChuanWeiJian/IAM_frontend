import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const UserManagement = lazy(() => import("./users"));

const NewOfficerAccount = lazy(() => import("./new_user/newUser"));

const OfficerAccountsList = lazy(() =>
  import("./user_accounts_list/officerAccountsList")
);

const EditAccountInformation = lazy(() =>
  import("./edit_user_account/EditAccountInformation")
);

const userManagementRoutes = [
  {
    path: "/user",
    exact: true,
    component: UserManagement,
    auth: authRoles.admin,
  },
  {
    path: "/user/new",
    exact: true,
    component: NewOfficerAccount,
    auth: authRoles.admin,
  },
  {
    path: "/user/list",
    exact: true,
    component: OfficerAccountsList,
    auth: authRoles.admin,
  },
  {
    path: "/user/edit/:id",
    exact: true,
    component: EditAccountInformation,
    auth: authRoles.admin,
  },
];

export default userManagementRoutes;
