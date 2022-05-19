import React, { forwardRef, HTMLAttributes } from "react";
import { Size } from "../../@types/style";
import S from "./Style";

type Props = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  //  (props: SVGProps<SVGElement>) => ReactElement;
  label?: string | null;
} & Size &
  HTMLAttributes<HTMLButtonElement>;
const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ Icon, label, ...rest }, ref) => (
    <S.Container {...rest} ref={ref}>
      <Icon strokeWidth="1px" />
      {label ? <S.Label>{label}</S.Label> : null}
    </S.Container>
  )
);

IconButton.defaultProps = {
  label: null,
};

export default IconButton;
