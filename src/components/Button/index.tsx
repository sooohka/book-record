import React, { DetailedHTMLProps, forwardRef, ReactNode } from "react";
import { Color, Size } from "../../@types/style";
import S from "./Style";

type Props = {
  variant?: "contained" | "outlined";
  children: ReactNode;
} & Size &
  Color &
  DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant, ...rest }, ref) => (
    <S.Container {...rest} ref={ref} variant={variant}>
      {children}
    </S.Container>
  )
);

Button.defaultProps = {
  variant: "contained",
};
export default Button;
