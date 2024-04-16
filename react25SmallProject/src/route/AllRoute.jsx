import { createBrowserRouter } from "react-router-dom";
import RootPage from "../root/RootPage";
import HomePage from "../components/home/HomePage";
import Accordian from "../components/25Project/Accordian";
import ColorGenerator from "../components/25Project/ColorGenerator";

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
      {
        path: "/hexOrRgbColor",
        element: <ColorGenerator></ColorGenerator>,
      },
    ],
  },
]);

export default router;
