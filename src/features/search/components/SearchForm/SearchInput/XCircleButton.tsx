import { forwardRef } from "react";

import S from "features/search/components/SearchForm/SearchInput/Style";

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const XCircleButton = forwardRef<HTMLButtonElement, Button>((props, ref) => (
  <S.Button {...props} ref={ref}>
    <S.XCircleIcon />
  </S.Button>
));

export default XCircleButton;
