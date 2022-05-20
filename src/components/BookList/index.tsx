import BookListItem from "components/BookList/BookListItem";
import S from "components/BookList/Style";
import { Book } from "types/book";

type Props = {
  books: Book[];
};

function BookList({ books }: Props) {
  return (
    <S.Container>
      {/* //FIXME: fix ? */}
      {books.map((book, i) => (
        <BookListItem key={`${book.isbn}-${i}`} book={book} />
      ))}
    </S.Container>
  );
}

export default BookList;
