import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboadLayout } from "layouts";
import { Home, Login, Register, Profile, Email, Setting, Usermanage } from "pages";

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
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "usermanage",
        element: <Usermanage />,
      },
      {
        path: "email",
        element: <Email />,
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
