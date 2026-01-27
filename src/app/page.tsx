
import Section from "@/components/ui/Section";
import { SpecialOffersSlider } from "@/components/SpecialOffersSlider";
import { InfoSection } from "@/components/InfoSection";
import { AppPromo } from "@/components/ui/AppPromo";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export default function HomePage() {
  return (
    <>
      <Section />
      <SpecialOffersSlider />
      <InfoSection />
      <AppPromo />
      <LogoMarquee />
    </>
  );
}