import { ComponentProps } from "react";
import Image from "next/image";

interface BadgeProps extends ComponentProps<"div"> {}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-between uppercase text-sm text-lightgreen bg-lightestgreen rounded-full px-[17px] py-[6px] w-fit">
      {children}
    </div>
  );
};

Badge.displayName = "Badge";

export default Badge;
