import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../page/SearchPage";

function SearchRoute() {
  return (
    <Routes>
      <Route index element={<SearchPage />} />
    </Routes>
  );
}

export default SearchRoute;
