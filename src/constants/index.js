import React from "react";

export const Home = React.lazy(() => import("@/pages/Home/Home"));
export const Movies = React.lazy(() => import("@/pages/Movies/Movies"));
export const Series = React.lazy(() => import("@/pages/Series/Series"));
export const Tv = React.lazy(() => import("@/pages/Tv/Tv"));
export const Artists = React.lazy(() => import("@/pages/Artists/Artists"));
export const NotFound = React.lazy(() => import("@/pages/NotFound/NotFound"));

export * from "./navbar";
export * from "./footer";
export * from "./join";
export * from "./home";
export * from "../api/axiosInstance";
