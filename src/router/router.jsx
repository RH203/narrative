import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../Layout";
import { Homepage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
]);
