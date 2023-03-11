import { createBrowserRouter, Navigate } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let { DashboadLayout } = await import("layouts/Dashboard");
      return {
        Component: DashboadLayout,
      };
    },
    children: [
      { element: <Navigate to="/home" />, index: true },
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
    async lazy() {
      let { AuthLayout } = await import("layouts/Auth");
      return {
        Component: AuthLayout,
      };
    },
    children: [
      { element: <Navigate to="/auth/login" />, index: true },
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
