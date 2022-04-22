import { lazy } from "react";
//import { authRoles } from "app/auth/authRoles";

import UserManagement from "./users";

import NewOfficerAccount from "./new_user/newUser";

import OfficerAccountsList from "./user_accounts_list/officerAccountsList";

import EditAccountInformation from "./edit_user_account/EditAccountInformation";

const userManagementRoutes = [
  {
    path: "/user",
    exact: true,
    component: UserManagement,
  },
  {
    path: "/user/new",
    exact: true,
    component: NewOfficerAccount,
  },
  {
    path: "/user/list",
    exact: true,
    component: OfficerAccountsList,
  },
  {
    path: "/user/edit/:id",
    exact: true,
    component: EditAccountInformation,
  },
];

export default userManagementRoutes;
