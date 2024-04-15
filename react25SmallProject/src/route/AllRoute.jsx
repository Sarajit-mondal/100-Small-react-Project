import { createBrowserRouter } from "react-router-dom";
import RootPage from "../root/RootPage";
import HomePage from "../components/home/HomePage";
import Accordian from "../components/25Project/Accordian";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/accordian",
        element: <Accordian></Accordian>,
      },
    ],
  },
]);

export default router;
