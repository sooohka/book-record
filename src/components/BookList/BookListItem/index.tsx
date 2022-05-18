import { BookmarkIcon, HeartIcon } from "@heroicons/react/outline";
import React from "react";
import Swal from "sweetalert2";
import noImage from "../../../assets/noimg3.png";
import IconButton from "../../IconButton";
import S from "./Style";

type Props = {
  book: Book;
};

function BookListItem(props: Props) {
  const {
    book: { author, image, pubdate, publisher, title },
  } = props;

  const handleImageLoadError: React.ReactEventHandler<HTMLImageElement> = (
    e
  ) => {
    e.currentTarget.src = noImage;
  };

  const handleLiClick = () => {
    Swal.fire({
      title: "즐겨찾기 추가",
      icon: "question",
      confirmButtonText: "추가",
      cancelButtonText: "취소",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        // 즐겨찾기 추가 로직
      }
    });
  };
  // console.log(`${publisher} / ${pubdate}`);

  return (
    // TODO:Container 클릭시 모달 열리게 하기, link modal에 전달
    <S.Container onClick={handleLiClick} tabIndex={0}>
      <S.BookImg src={image} alt={title} onError={handleImageLoadError} />
      <S.InfoBox>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
        <S.SubTitle dangerouslySetInnerHTML={{ __html: author }} />
        <S.Paragraph
          dangerouslySetInnerHTML={{
            __html: `${publisher} / ${pubdate}`,
          }}
        />
        <S.IconBox>
          {/* TODO:check되었으면 solid 아니면 outline */}
          <IconButton width="2rem" height="2rem" Icon={HeartIcon} />
          <IconButton width="2rem" height="2rem" Icon={BookmarkIcon} />
        </S.IconBox>
      </S.InfoBox>
    </S.Container>
  );
}

export default BookListItem;
