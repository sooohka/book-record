import React, { createContext, ReactNode } from "react";

type BookListContextType = {
  books: Book[];
};
const BookListContext = createContext<BookListContextType>({ books: [] });

type Props = {
  children: ReactNode;
  value: BookListContextType;
};

function BookListContextProvider({ children, value }: Props) {
  return (
    <BookListContext.Provider value={value}>
      {children}
    </BookListContext.Provider>
  );
}

export type { BookListContextType };
export { BookListContextProvider };
export default BookListContext;
