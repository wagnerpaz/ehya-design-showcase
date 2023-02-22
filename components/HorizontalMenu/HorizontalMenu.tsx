import { ComponentProps, forwardRef } from "react";

interface HorizontalMenuProps extends ComponentProps<"ul"> {}

const HorizontalMenu = forwardRef<HTMLUListElement, HorizontalMenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className="flex flex-row items-center cursor-pointer text-base text-primary font-semibold"
        {...props}
      >
        {children}
      </ul>
    );
  }
);

HorizontalMenu.displayName = "HorizontalMenu";

export default HorizontalMenu;
