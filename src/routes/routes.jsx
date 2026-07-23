import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import {
  Home,
  Movies,
  Series,
  Tv,
  Artists,
  NotFound,
} from "@/constants";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "series", element: <Series /> },
      { path: "tv", element: <Tv /> },
      { path: "artists", element: <Artists /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
