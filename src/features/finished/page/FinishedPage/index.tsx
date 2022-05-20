import { useRecoilValue } from "recoil";

import BookList from "components/BookList";
import AppWrapper from "components/Layout/AppContainer";
import { finishedBooksState } from "modules/recoil/finishedBooks";
import Title from "components/Title";

function FinishedPage() {
  const bookmarkValue = useRecoilValue(finishedBooksState);
  if (bookmarkValue.length === 0) {
    return (
      <AppWrapper>
        <Title>다 읽은 책이 없어요😭</Title>
        <BookList books={bookmarkValue} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper>
      <Title>다 읽은 책 목록</Title>
      <BookList books={bookmarkValue} />
    </AppWrapper>
  );
}

export default FinishedPage;
