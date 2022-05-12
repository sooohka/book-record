import { HeartIcon, SearchIcon, BookmarkIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../../IconButton";
import S from "./Style";

function Footer() {
  const navigate = useNavigate();
  // TODO: move path to Constants
  return (
    <S.Container>
      <S.LinkContainer>
        <IconButton
          onClick={() => navigate("/search")}
          width="4rem"
          height="4rem"
          Icon={SearchIcon}
          label="search"
        />
      </S.LinkContainer>
      <S.LinkContainer>
        <IconButton
          onClick={() => navigate("/favorites")}
          width="4rem"
          height="4rem"
          Icon={HeartIcon}
          label="favorites"
        />
      </S.LinkContainer>
      <S.LinkContainer>
        <IconButton
          onClick={() => navigate("/finished")}
          width="4rem"
          height="4rem"
          Icon={BookmarkIcon}
          label="finished"
        />
      </S.LinkContainer>
    </S.Container>
  );
}

export default Footer;
