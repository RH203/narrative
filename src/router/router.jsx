import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../Layout";
import { Homepage, Aboutpage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <Aboutpage />,
      },
    ],
  },
]);
