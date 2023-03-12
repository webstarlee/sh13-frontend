import { createBrowserRouter, Navigate } from "react-router-dom";
import { RequireAuth } from "./AuthCheck";
import { DashboadLayout } from "layouts/Dashboard";
import { AuthLayout } from "layouts/Auth";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth><DashboadLayout /></RequireAuth>,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        async lazy() {
          let { Home } = await import("pages/Home");
          return {
            Component: Home,
          };
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        async lazy() {
          let { Login } = await import("pages/Login");
          return {
            Component: Login,
          };
        },
      },
      {
        path: "register",
        async lazy() {
          let { Register } = await import("pages/Register");
          return {
            Component: Register,
          };
        },
      },
    ],
  },
]);
