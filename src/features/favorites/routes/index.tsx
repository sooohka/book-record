import React from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "../page/FavoritePage";

function FavoritesRoute() {
  return (
    <Routes>
      <Route index element={<FavoritesPage />} />
    </Routes>
  );
}

export default FavoritesRoute;
