import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../page/SearchPage";
import SearchResultPage from "../page/SearchResultPage";

function SearchRoute() {
  return (
    <Routes>
      <Route index element={<SearchPage />} />
      <Route path="results" element={<SearchResultPage />} />
    </Routes>
  );
}

export default SearchRoute;
