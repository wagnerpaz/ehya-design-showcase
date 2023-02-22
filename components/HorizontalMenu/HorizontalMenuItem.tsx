import { ComponentProps, forwardRef } from "react";

interface HorizontalMenuItemProps extends ComponentProps<"li"> {}

const HorizontalMenuItem = forwardRef<HTMLLIElement, HorizontalMenuItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <li ref={ref} className="mr-10" {...props}>
        {children}
      </li>
    );
  }
);

HorizontalMenuItem.displayName = "HorizontalMenuItem";

export default HorizontalMenuItem;
