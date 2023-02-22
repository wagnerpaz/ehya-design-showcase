import { ComponentProps } from "react";
import Image from "next/image";
import classNames from "classnames";

import Button from "/components/Button";

import ArrowRightIcon from "/public/icons/arrow-right.svg";
import VerifiedIcon from "/public/icons/verified.svg";

interface HeroSectionOptionProps extends ComponentProps<"div"> {
  buttonLabel: string;
  buttonVariant: "contained" | "outlined";
  title: string;
  description: string | React.ReactNode;
}

const HeroSectionOption: React.FC<HeroSectionOptionProps> = ({
  className,
  buttonLabel,
  buttonVariant,
  title,
  description,
}) => {
  return (
    <div className={classNames("flex flex-col", className)}>
      <Button
        className="flex flex-row items-center text-lg px-8 py-4 leading-[25px]"
        variant={buttonVariant}
      >
        <span>{buttonLabel}</span>
        <ArrowRightIcon className="ml-[15px]" fill="currentColor" />
      </Button>
      <VerifiedIcon className="mt-6" width={24} height={24} />
      <span className="font-bold mt-4">{title}</span>
      <span className="text-gray leading-[28px] mt-2">{description}</span>
    </div>
  );
};

HeroSectionOption.displayName = "HeroSection";

export default HeroSectionOption;
