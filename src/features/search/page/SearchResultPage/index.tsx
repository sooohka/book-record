import { Suspense, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import BookList from "components/BookList";
import AppWrapper from "components/Layout/AppContainer";
import Spinner from "components/Spinner";
import { searchQueryState } from "modules/recoil/search";

function SearchResultPage() {
  const [params] = useSearchParams();
  const setQuery = useSetRecoilState(searchQueryState);

  useEffect(() => {
    const query = params.get("query") as string;
    if (!query) return;
    setQuery(query);
  }, [params, setQuery]);

  return (
    <AppWrapper>
      <Suspense fallback={<Spinner />}>
        <BookList />
      </Suspense>
    </AppWrapper>
  );
}

export default SearchResultPage;
