import { Hero } from "./Hero";
import { Highlight } from "./Highlight";
import { SocialMediaSection } from "./SocialMediaSection";


export const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Highlight />
      <SocialMediaSection />
    </>
  );
};
