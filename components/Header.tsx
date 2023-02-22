import { ComponentProps, forwardRef } from "react";
import Image from "next/image";

import HorizontalMenu from "./HorizontalMenu/HorizontalMenu";
import HorizontalMenuItem from "./HorizontalMenu/HorizontalMenuItem";
import Button from "./Button";

interface HeaderProps extends ComponentProps<"div"> {}

const Header = () => {
  return (
    <div className="flex flex-row items-center h-[100px] mb-8">
      <Image src="/ehya.svg" alt="ehya-logo" width={90} height={28} />
      <div className="flex-1" />
      <menu className="flex flex-row">
        <HorizontalMenu>
          <HorizontalMenuItem>Home</HorizontalMenuItem>
          <HorizontalMenuItem>Landings</HorizontalMenuItem>
          <HorizontalMenuItem>Pages</HorizontalMenuItem>
          <HorizontalMenuItem>Docs</HorizontalMenuItem>
          <HorizontalMenuItem>Help</HorizontalMenuItem>
        </HorizontalMenu>
        <Button variant="outlined" shadowed>
          Get it now
        </Button>
      </menu>
    </div>
  );
};

Header.displayName = "Header";

export default Header;
