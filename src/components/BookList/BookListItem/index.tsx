import { MouseEventHandler, useEffect, useState } from "react";

import noImage from "assets/noimg3.png";
import {
  CheckOutlinedIcon,
  CheckSolidIcon,
  HeartOutlinedIcon,
  HeartSolidIcon,
} from "assets/svgs";
import S from "components/BookList/BookListItem/Style";
import IconButton from "components/IconButton";
import useFinishedBookState from "hooks/recoil/useBookmarkState";
import useFavoriteState from "hooks/recoil/useFavoriteState";
import { Book } from "types/book";
import {
  fireAddFavoriteModal,
  fireRemoveFavoriteModal,
} from "util/swal/favoriteAlert";
import {
  fireAddFinishedBooksModal,
  fireRemoveFinishedBooksModal,
} from "util/swal/finishedBookAlert";
import { fireMoveToLink } from "util/swal/moveToLinkAlert";

type Props = {
  book: Book;
};

function BookListItem(props: Props) {
  const { addFavorite, deleteFavorite, getFavoriteById } = useFavoriteState();
  const { addFinishedBooks, deleteFinishedBooks, getFinishedBooksById } =
    useFinishedBookState();
  const { book } = props;
  const { author, image, link, pubdate, publisher, title, isbn } = book;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleImageLoadError: React.ReactEventHandler<HTMLImageElement> = (
    e
  ) => {
    e.currentTarget.src = noImage;
  };

  const handleLiClick = () => {
    fireMoveToLink(() => {
      window.open(link);
    }).catch(() => {});
  };

  const handleFavoriteClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      fireRemoveFavoriteModal(() => deleteFavorite(book)).catch(() => {});
    } else {
      fireAddFavoriteModal(() => addFavorite(book)).catch(() => {});
    }
  };

  const handleBookmarkClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    if (isFinished) {
      fireRemoveFinishedBooksModal(() => {
        deleteFinishedBooks(book);
      }).catch(() => {});
    } else {
      fireAddFinishedBooksModal(() => addFinishedBooks(book)).catch(() => {});
    }
  };

  useEffect(() => {
    if (getFavoriteById(isbn)) {
      setIsFavorite(true);
    }
    return () => {
      setIsFavorite(false);
    };
  }, [getFavoriteById, isbn]);

  useEffect(() => {
    if (getFinishedBooksById(isbn)) {
      setIsFinished(true);
    }
    return () => {
      setIsFinished(false);
    };
  }, [getFinishedBooksById, isbn]);

  return (
    <S.Container onClick={handleLiClick} tabIndex={0}>
      <S.BookImg src={image} alt={title} onError={handleImageLoadError} />
      <S.InfoBox>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
        <S.SubTitle dangerouslySetInnerHTML={{ __html: author }} />
        <S.Paragraph
          dangerouslySetInnerHTML={{ __html: `${publisher} / ${pubdate}` }}
        />
        <S.IconBox>
          <IconButton
            onClick={handleFavoriteClick}
            width="2rem"
            height="2rem"
            Icon={isFavorite ? HeartSolidIcon : HeartOutlinedIcon}
          />
          <IconButton
            onClick={handleBookmarkClick}
            width="2rem"
            height="2rem"
            Icon={isFinished ? CheckSolidIcon : CheckOutlinedIcon}
          />
        </S.IconBox>
      </S.InfoBox>
    </S.Container>
  );
}

export default BookListItem;
