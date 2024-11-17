import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoardPage from "./components/DashboardPage";
import SearchPage from "./components/SearchPage";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <DashBoardPage /> },
    { path: "/search", element: <SearchPage /> },
  ]);
};

export default AppRoutes;
