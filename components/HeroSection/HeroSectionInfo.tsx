import { ComponentProps } from "react";
import classNames from "classnames";

import HeroSectionOption from "./HeroSectionOption";

interface HeroSectionInfoProps extends ComponentProps<"div"> {}

const HeroSectionInfo: React.FC<HeroSectionInfoProps> = ({ className }) => {
  return (
    <div className={classNames("text-primary flex flex-col", className)}>
      <h2 className="font-hk font-bold mb-6 text-[56px] leading-[68px] mt-[66px]">
        TheFutureTalks <br />
        Conference
      </h2>
      <span className="font-normal text-xl leading-9">
        Event madness gathering innovators, startups
        <br />& tech enthusiasts in Special Region of Yogyakarta
      </span>
      <div className="flex flex-row mt-[40px] h-full">
        <HeroSectionOption
          buttonLabel="Conference"
          buttonVariant="contained"
          title="18 November 2019"
          description={
            <>
              <span>25+ top notch</span>
              <br />
              <span>speakers @ Sebostudio</span>
              <br />
              <span>Gallery Kreavi</span>
            </>
          }
        />
        <div className="h-full border-l-[1px] border-lightgray mx-[23.5px]" />
        <HeroSectionOption
          buttonLabel="Startup Awards"
          buttonVariant="outlined"
          title="100+ startups"
          description={
            <>
              <span>Top 8 startups competing</span>
              <br />
              <span>in final @ TheFutureTalks</span>
              <br />
              <span>Conference 2019</span>
              <br />
            </>
          }
        />
      </div>
    </div>
  );
};

HeroSectionInfo.displayName = "HeroSection";

export default HeroSectionInfo;
