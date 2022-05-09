import React from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesRoute from "../features/favorites/routes";
import SearchRoute from "../features/search/routes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="search/*" element={<SearchRoute />} />
      <Route path="favorites/*" element={<FavoritesRoute />} />
      {/* TODO:Homepage만들고 넣기 */}
      <Route path="*" element={<FavoritesRoute />} />
    </Routes>
  );
}

export default AppRoutes;
