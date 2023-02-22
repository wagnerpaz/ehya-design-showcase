import { ComponentProps } from "react";
import Image from "next/image";

import HeroSectionInfo from "./HeroSectionInfo";

interface HeroSectionProps extends ComponentProps<"section"> {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="flex flex-row justify-between">
      <HeroSectionInfo className="flex-1" />
      <Image src="/hero.png" alt="hero image" width={635} height={588} />
    </section>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
