import React from "react";
import BookList from "./BookList";
import { ContextProvider, ContextType } from "./context";

type Props = {
  value: ContextType;
};

function BookListContainer({ value }: Props) {
  return (
    <ContextProvider value={value}>
      <BookList />
    </ContextProvider>
  );
}

export default BookListContainer;
