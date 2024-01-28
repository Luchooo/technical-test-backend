import { App } from "@/App";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { NotFoundScreen } from "../pages/NotFoundScreen";

export const router = createBrowserRouter([
  {
    path: "/repository",
    element: <App />,
  },
  {
    path: "/",
    element: <Navigate to="/repository" replace />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);
