import { ComponentProps } from "react";
import classNames from "classnames";

import ArrowRightIcon from "/public/icons/arrow-right.svg";

interface DescriptiveImageLearnMoreProps extends ComponentProps<"div"> {
  title: string;
  description: string;
}

const DescriptiveImageLearnMore: React.FC<DescriptiveImageLearnMoreProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={classNames("w-[360px] h-[500px] drop-shadow-sm", className)}
    >
      <h3 className="mt-[303px] font-hk font-bold text-[28px] leading-[36px] mx-8 text-white tracking-[0.2px]">
        {title}
      </h3>
      <span className="block font-sans mx-8 mt-3 text-xl leading-[36px] text-white font-normal">
        {description}
      </span>
      <a className="flex flex-row items-center text-secondary ml-8 mt-[18px] font-bold text-[18px] leading-[25px]">
        Learn more{" "}
        <ArrowRightIcon
          className="ml-2 mt-1"
          fill="currentColor"
          width={15}
          height={15}
        />
      </a>
    </div>
  );
};

DescriptiveImageLearnMore.displayName = "DescriptiveImageLearnMore";

export default DescriptiveImageLearnMore;
