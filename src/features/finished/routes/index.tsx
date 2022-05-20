import { Route, Routes } from "react-router-dom";

import FinishedPage from "features/finished/page/FinishedPage";

function FinishedRoute() {
  return (
    <Routes>
      <Route index element={<FinishedPage />} />
    </Routes>
  );
}

export default FinishedRoute;
