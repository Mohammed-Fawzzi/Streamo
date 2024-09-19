import React, { Suspense, lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

// Lazy load components
const Layout = lazy(() => import("./Components/Layout/Layout"));
const Home = lazy(() => import("./Components/Home/Home"));
const Login = lazy(() => import("./Components/Login/Login"));
const Register = lazy(() => import("./Components/Register/Register"));
const ProtectedRoute = lazy(() =>
  import("./Components/ProtectedRoute/ProtectedRoute")
);
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
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "/movies",
          element: (
            <Suspense fallback={<Loading />}>
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "/series",
          element: (
            <Suspense fallback={<Loading />}>
              <ProtectedRoute>
                <Series />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "/tv",
          element: (
            <Suspense fallback={<Loading />}>
              <ProtectedRoute>
                <Tv />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "/artists",
          element: (
            <Suspense fallback={<Loading />}>
              <ProtectedRoute>
                <Artists />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={<Loading />}>
              <Register />
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
