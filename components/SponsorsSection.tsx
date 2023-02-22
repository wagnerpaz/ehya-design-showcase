import { ComponentProps } from "react";
import Image from "next/image";
import classNames from "classnames";

interface SponsorsSectionProps extends ComponentProps<"section"> {}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ className }) => {
  return (
    <section
      className={classNames(
        "flex flex-col items-center justify-between",
        className
      )}
    >
      <h2 className="font-hk font-bold text-2xl">
        Sponsors of TheFutureTalks Conference
      </h2>
      <ul className="w-full flex flex-row items-center justify-between mt-[50px]">
        <li>
          <Image
            src="/sponsor-logos/slack.png"
            alt="slack sponsor"
            width={109}
            height={32}
          />
        </li>
        <li>
          <Image
            src="/sponsor-logos/netflix.png"
            alt="netflix sponsor"
            width={95}
            height={32}
          />
        </li>
        <li>
          <Image
            src="/sponsor-logos/fitbit.png"
            alt="fitbit sponsor"
            width={95}
            height={32}
          />
        </li>
        <li>
          <Image
            src="/sponsor-logos/google.png"
            alt="google sponsor"
            width={95}
            height={32}
          />
        </li>
        <li>
          <Image
            src="/sponsor-logos/airbnb.png"
            alt="airbnb sponsor"
            width={95}
            height={32}
          />
        </li>
        <li>
          <Image
            src="/sponsor-logos/uber.png"
            alt="uber sponsor"
            width={95}
            height={32}
          />
        </li>
      </ul>
    </section>
  );
};

SponsorsSection.displayName = "HeroSection";

export default SponsorsSection;
