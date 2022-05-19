import { forwardRef, HTMLAttributes } from "react";

import S from "components/Spinner/Style";

type Props = HTMLAttributes<HTMLDivElement>;

const Spinner = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <S.Backdrop {...props} ref={ref}>
    <S.Spinner />
  </S.Backdrop>
));

export default Spinner;
