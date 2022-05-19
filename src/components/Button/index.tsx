import { DetailedHTMLProps, forwardRef, ReactNode } from "react";

import S from "components/Button/Style";
import { Color, Size } from "types/style";

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
