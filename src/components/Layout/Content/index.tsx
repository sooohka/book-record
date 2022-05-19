import { ReactNode } from "react";

import S from "components/Layout/Content/Style";

function Content({ children }: { children: ReactNode }) {
  return <S.Content>{children}</S.Content>;
}

export default Content;
