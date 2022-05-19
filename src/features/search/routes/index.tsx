import { Route, Routes } from "react-router-dom";

import SearchPage from "features/search/page/SearchPage";
import SearchResultPage from "features/search/page/SearchResultPage";

function SearchRoute() {
  return (
    <Routes>
      <Route index element={<SearchPage />} />
      <Route path="results" element={<SearchResultPage />} />
    </Routes>
  );
}

export default SearchRoute;
