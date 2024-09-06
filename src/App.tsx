import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components/layout";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/register" />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
])

export { router }