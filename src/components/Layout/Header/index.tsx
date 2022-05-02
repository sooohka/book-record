import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon, SearchIcon } from "@heroicons/react/outline";
import S from "./Style";
import logo from "../../../assets/logo.png";
import IconButton from "../../IconButton";

function Header() {
  return (
    <S.Container>
      <S.LogoBox>
        <Link to="/">
          <S.Logo src={logo} />
        </Link>
      </S.LogoBox>
      <S.ToolBox>
        <IconButton width="3rem" Icon={SearchIcon} />
        <IconButton width="3rem" Icon={HeartIcon} />
      </S.ToolBox>
      <S.Avatar>
        <S.AvatarImg src={logo} />
      </S.Avatar>
    </S.Container>
  );
}

export default Header;
