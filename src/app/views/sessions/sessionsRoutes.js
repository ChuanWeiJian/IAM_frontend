import { lazy } from "react";

const Signup = lazy(() => import("./Signup"));

const Signin = lazy(() => import("./Signin"));

const ForgotPassword = lazy(() => import("./ForgotPassword"));

const Error404 = lazy(() => import("./Error"));

const Unauthorized = lazy(() => import("app/auth/Unauthorized"));

const Unauthenticated = lazy(() => import("app/auth/Unauthenticated"));

const sessionsRoutes = [
  {
    path: "/session/signup",
    component: Signup,
  },
  {
    path: "/session/signin",
    component: Signin,
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/session/404",
    component: Error404,
  },
  {
    path: "/user/unauthorized",
    component: Unauthorized,
  },
  {
    path: "/user/unauthenticated",
    component: Unauthenticated,
  },
];

export default sessionsRoutes;
