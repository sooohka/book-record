import React from "react";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/outline";
import IconButton from "../../IconButton";
import S from "./Style";

type Props = {
  book: Book;
};

function BookListItem(props: Props) {
  const {
    book: { author, description, image, isbn, link, pubdate, publisher, title },
  } = props;
  // TODO:img 없는경우 처리
  return (
    // TODO:Container 클릭시 모달 열리게 하기, link modal에 전달
    <S.Container tabIndex={0}>
      <S.BookImg src={image} alt={title} />
      <S.InfoBox>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
        <S.SubTitle dangerouslySetInnerHTML={{ __html: author }} />
        <S.Paragraph>
          <strong dangerouslySetInnerHTML={{ __html: publisher }} /> / {pubdate}
        </S.Paragraph>
        <S.IconBox>
          {/* TODO:check되었으면 solid 아니먄 outline */}
          <IconButton width="2rem" height="2rem" Icon={HeartIcon} />
          <IconButton width="2rem" height="2rem" Icon={BookmarkIcon} />
        </S.IconBox>
      </S.InfoBox>
    </S.Container>
  );
}

export default BookListItem;
