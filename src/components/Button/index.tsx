import React, { forwardRef, ReactNode } from "react";
import S from "./Style";

type Props = {
  variant?: "outlined" | "contained";
  children: ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const defaultProps = {
  variant: "contained" as const,
};

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { variant, children } = props;
  if (variant === "outlined") {
    return (
      <S.OutLinedButton {...props} ref={ref}>
        {children}
      </S.OutLinedButton>
    );
  }
  return (
    <S.ContainedButton {...props} ref={ref}>
      {children}
    </S.ContainedButton>
  );
});

Button.defaultProps = defaultProps;

export default Button;
