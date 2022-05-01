import React, { forwardRef, HTMLAttributes, SVGProps } from "react";
import S from "./Style";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
} & HTMLAttributes<HTMLButtonElement>;
const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ Icon, label, ...rest }, ref) => (
    <S.Container {...rest} ref={ref}>
      <Icon />
      <S.Label>{label}</S.Label>
    </S.Container>
  )
);

export default IconButton;
