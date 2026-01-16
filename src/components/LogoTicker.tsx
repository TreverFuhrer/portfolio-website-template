import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { LogosMarquee } from "./socialproof/LogosMarquee";
import { logosSection } from "@/content";

type LogoTickerProps = {
  id?: string;
};

export const LogoTicker = ({ id = "customers" }: LogoTickerProps) => {
  return(
    <MotionSection id={id} variant="staggerChildren" className="section-block bg-(--ink) text-white">
      <Container>
        {/* Replace this with your social proof headline. */}
        <MotionItem>
          <h2 className="mb-16 text-center text-lg text-white/70">{logosSection.heading}</h2>
        </MotionItem>
        <MotionItem variant="fadeIn">
          <LogosMarquee logos={logosSection.logos} />
        </MotionItem>
      </Container>
    </MotionSection>
  )
};
