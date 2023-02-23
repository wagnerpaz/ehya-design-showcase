import { ComponentProps } from "react";
import Image from "next/image";
import classNames from "classnames";

interface QuoteProps extends ComponentProps<"div"> {
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ className, children, author }) => {
  return (
    <div className={classNames("mx-auto mt-[165px]", className)}>
      <Image
        src="/icons/quote-left.png"
        alt="quote mark"
        width={40}
        height={46}
      />
      <span className="block font-hk text-[40px] leading-[60px] mt-[18px] font-normal text-primary">
        &quot;{children}&quot;
      </span>
      <span className="block font-sans text-lg leading-[25px] mt-[16px] text-gray">
        {author}
      </span>
    </div>
  );
};

Quote.displayName = "Quote";

export default Quote;
