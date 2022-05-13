import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeartIcon, SearchIcon } from "@heroicons/react/outline";
import S from "./Style";
import logo from "../../../assets/logo.png";
import IconButton from "../../IconButton";

function Header() {
  const navigate = useNavigate();

  const handleSearchIconButtonClick = () => {
    navigate("/search");
  };

  const handleHeartIconButtonClick = () => {
    navigate("/favorites");
  };
  return (
    <S.Container>
      <S.LogoBox>
        <Link to="/">
          <S.Logo src={logo} />
        </Link>
      </S.LogoBox>
      <S.ToolBox>
        <IconButton
          onClick={handleSearchIconButtonClick}
          width="3rem"
          Icon={SearchIcon}
        />
        <IconButton
          onClick={handleHeartIconButtonClick}
          width="3rem"
          Icon={HeartIcon}
        />
      </S.ToolBox>
      <S.Avatar>
        <S.AvatarImg src={logo} />
      </S.Avatar>
    </S.Container>
  );
}

export default Header;
