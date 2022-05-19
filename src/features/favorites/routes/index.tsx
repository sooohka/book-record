import { Route, Routes } from "react-router-dom";

import FavoritesPage from "features/favorites/page/FavoritePage";

function FavoritesRoute() {
  return (
    <Routes>
      <Route index element={<FavoritesPage />} />
    </Routes>
  );
}

export default FavoritesRoute;
