import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboadLayout } from "layouts";
import { Home, Login, Register } from "pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboadLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
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
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
