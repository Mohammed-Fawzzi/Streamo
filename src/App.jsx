import React, { Suspense, lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

// Lazy load components
const Layout = lazy(() => import("./Components/Layout/Layout"));
const Home = lazy(() => import("./Components/Home/Home"));
const NotFound = lazy(() => import("./Components/NotFound/NotFound"));
const Movies = lazy(() => import("./Components/Movies/Movies"));
const Series = lazy(() => import("./Components/Series/Series"));
const Tv = lazy(() => import("./Components/Tv/Tv"));
const Artists = lazy(() => import("./Components/Artists/Artists"));
const Loading = lazy(() => import("./Components/Loading/Loading"));

const App = () => {
  const routes = createHashRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/movies",
          element: (
            <Suspense fallback={<Loading />}>
              <Movies />
            </Suspense>
          ),
        },
        {
          path: "/series",
          element: (
            <Suspense fallback={<Loading />}>
              <Series />
            </Suspense>
          ),
        },
        {
          path: "/tv",
          element: (
            <Suspense fallback={<Loading />}>
              <Tv />
            </Suspense>
          ),
        },
        {
          path: "/artists",
          element: (
            <Suspense fallback={<Loading />}>
              <Artists />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
