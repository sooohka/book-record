import React from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesRoute from "../page/favorites/routes";
import SearchRoute from "../page/search/routes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="search/*" element={<SearchRoute />} />
      <Route path="favorites/*" element={<FavoritesRoute />} />
    </Routes>
  );
}

export default AppRoutes;
