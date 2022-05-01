import { HeartIcon, SearchIcon } from "@heroicons/react/solid";
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
          Icon={SearchIcon}
          label="search"
        />
      </S.LinkContainer>
      <S.LinkContainer>
        <IconButton
          onClick={() => navigate("/favorites")}
          Icon={HeartIcon}
          label="favorites"
        />
      </S.LinkContainer>
    </S.Container>
  );
}

export default Footer;
