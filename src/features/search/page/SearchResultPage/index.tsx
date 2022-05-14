import React, { Suspense } from "react";
import BookList from "../../../../components/BookList";
import AppWrapper from "../../../../components/Layout/AppContainer";
import Spinner from "../../../../components/Spinner";
import SearchResultContainer from "../../container/SearchResultContainer";

function SearchResultPage() {
  return (
    <SearchResultContainer>
      <AppWrapper>
        <Suspense fallback={<Spinner />}>
          <BookList />
        </Suspense>
      </AppWrapper>
    </SearchResultContainer>
  );
}

export default SearchResultPage;
