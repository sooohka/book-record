import React, { ReactNode } from "react";
import S from "./Style";

type Props = {
  children: ReactNode;
};

function SearchList({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}

export default SearchList;
