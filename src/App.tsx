import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components/layout";
import { Register } from "./pages/register";

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
      }
    ]
  }
])

export { router }