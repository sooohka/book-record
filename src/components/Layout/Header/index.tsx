import React from "react";
import { Link } from "react-router-dom";
import S from "./Style";
import logo from "../../../assets/logo.png";

function Header() {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo src={logo} />
      </Link>
    </S.Container>
  );
}

export default Header;
