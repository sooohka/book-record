import {
  BookmarkOutlinedIcon,
  BookmarkSolidIcon,
  HeartOutlinedIcon,
  HeartSolidIcon,
} from "assets/svgs";
import useFavoriteState from "hooks/recoil/useFavoriteState";
import React, { useEffect, useState } from "react";
import {
  fireAddFavoriteModal,
  fireRemoveFavoriteModal,
} from "util/swal/favoriteAlert";
import noImage from "../../../assets/noimg3.png";
import IconButton from "../../IconButton";
import S from "./Style";

type Props = {
  book: Book;
};

function BookListItem(props: Props) {
  const { addFavorite, deleteFavorite } = useFavoriteState();
  const { book } = props;
  const { author, image, pubdate, publisher, title, isbn } = book;
  const { getFavoriteById } = useFavoriteState();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookMarked] = useState(false);

  const handleImageLoadError: React.ReactEventHandler<HTMLImageElement> = (
    e
  ) => {
    e.currentTarget.src = noImage;
  };

  const handleLiClick = () => {
    if (isFavorite) {
      fireRemoveFavoriteModal(() => deleteFavorite(book));
    } else {
      fireAddFavoriteModal(() => addFavorite(book));
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
            width="2rem"
            height="2rem"
            Icon={isFavorite ? HeartSolidIcon : HeartOutlinedIcon}
          />
          <IconButton
            width="2rem"
            height="2rem"
            Icon={isBookMarked ? BookmarkSolidIcon : BookmarkOutlinedIcon}
          />
        </S.IconBox>
      </S.InfoBox>
    </S.Container>
  );
}

export default BookListItem;
