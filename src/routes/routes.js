import { createBrowserRouter } from "react-router-dom";

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
      {
        index: true,
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
