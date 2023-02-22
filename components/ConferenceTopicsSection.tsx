import { ComponentProps } from "react";
import Image from "next/image";

import Badge from "./Badge";
import DescriptiveImageLearnMore from "./DescriptiveImageLearnMore";

interface ConferenceTopicsSectionProps extends ComponentProps<"section"> {}

const ConferenceTopicsSection: React.FC<ConferenceTopicsSectionProps> = ({
  className,
}) => {
  return (
    <section className={className}>
      <Badge>Our Topics</Badge>
      <h2 className="font-hk font-bold text-4xl leading-[48px] text-primary mt-4">
        Conference Topics
      </h2>
      <div className="w-full flex flex-row items-center justify-start mt-[48px] mb-10">
        <DescriptiveImageLearnMore
          className="bg-future-of-work mr-[30px]"
          title="Future of Work"
          description="Majority of peole will work in jobs that don’t exist today."
        />
        <DescriptiveImageLearnMore
          className="bg-future-of-data mr-[30px]"
          title="Future of Data"
          description="Thanks to never-ending piles of data & the amount of insight"
        />
        <DescriptiveImageLearnMore
          className="bg-future-of-learning"
          title="Future of Learning"
          description="A constant ability to learn will be on the most crucial skills"
        />
      </div>
    </section>
  );
};

ConferenceTopicsSection.displayName = "ConferenceTopicsSection";

export default ConferenceTopicsSection;
