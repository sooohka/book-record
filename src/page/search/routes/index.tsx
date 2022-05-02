import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../components";

function SearchRoute() {
  return (
    <Routes>
      <Route index element={<SearchPage />} />
    </Routes>
  );
}

export default SearchRoute;
