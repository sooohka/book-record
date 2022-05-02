import React, { forwardRef, HTMLAttributes, SVGProps } from "react";
import { Size } from "../../@types/style";
import S from "./Style";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  label?: string | null;
} & Size &
  HTMLAttributes<HTMLButtonElement>;
const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ Icon, label, ...rest }, ref) => (
    <S.Container {...rest} ref={ref}>
      <Icon />
      {label ? <S.Label>{label}</S.Label> : null}
    </S.Container>
  )
);

IconButton.defaultProps = {
  label: null,
};

export default IconButton;
