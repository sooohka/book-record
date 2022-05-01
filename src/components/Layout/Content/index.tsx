import React, { ReactNode } from "react";
import S from "./Style";

function Content({ children }: { children: ReactNode }) {
  return <S.Content>{children}</S.Content>;
}

export default Content;
