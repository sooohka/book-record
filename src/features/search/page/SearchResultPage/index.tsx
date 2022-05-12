import React, { useEffect, useState } from "react";
import getBooks from "../../../../api/getBooks";
import BookListContainer from "../../../../components/BookList";
import AppContainer from "../../../../components/Layout/AppContainer";

function SearchResultPage() {
  const [data, setData] = useState<Book[]>([]);

  useEffect(() => {
    getBooks({ query: "2019" })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log());
  }, []);

  return (
    <AppContainer>
      <BookListContainer value={{ books: data }} />
    </AppContainer>
  );
}

export default SearchResultPage;
