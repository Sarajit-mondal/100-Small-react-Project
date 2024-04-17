import { createBrowserRouter } from "react-router-dom";
import RootPage from "../root/RootPage";
import HomePage from "../components/home/HomePage";
import Accordian from "../components/25Project/Accordian";
import ColorGenerator from "../components/25Project/ColorGenerator";
import StarRating from "../components/25Project/StarRating";
import ImageSlider from "../components/25Project/ImageSlider";

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
      {
        path: "/starRating",
        element: <StarRating></StarRating>,
      },
      {
        path: "/imageSlider",
        loader: () => fetch("https://picsum.photos/v2/list?page=1&limit=10"),
        element: <ImageSlider></ImageSlider>,
      },
    ],
  },
]);

export default router;
