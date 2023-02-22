import { ComponentProps, forwardRef } from "react";
import classNames from "classnames";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "outlined" | "contained";
  shadowed?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant = "contained", shadowed = false, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(
          "font-bold text-base leading-4 border-2 rounded-lg px-6 py-3",
          {
            "text-shadow": shadowed,
            "text-secondary bg-white": variant === "outlined",
            "text-white border-secondary bg-secondary": variant === "contained",
          },
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
