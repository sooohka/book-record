import { Route, Routes } from "react-router-dom";

import FavoritesRoute from "features/favorites/routes";
import SearchRoute from "features/search/routes";
import FinishedRoute from "features/finished/routes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="search/*" element={<SearchRoute />} />
      <Route path="favorites/*" element={<FavoritesRoute />} />
      <Route path="finished/*" element={<FinishedRoute />} />
      {/* TODO:Homepage만들고 넣기 */}
      <Route path="*" element={<FavoritesRoute />} />
    </Routes>
  );
}

export default AppRoutes;
