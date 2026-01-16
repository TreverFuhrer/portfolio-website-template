import BentoDemo from "./bentogrid";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { companyConfig } from "@/content";

type PillarsSectionProps = {
  id?: string;
};

export const PillarsSection = ({ id = "pillars" }: PillarsSectionProps) => {
  const { pillars } = companyConfig.homepage;
  return (

    <MotionSection id={id} variant="staggerChildren" className="section-block bg-(--ink) text-white">

      <Container>
        {/* About section headline. */}
        <MotionItem>
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">{pillars.title}</h2>
        </MotionItem>
        <MotionItem className='max-w-xl mx-auto'>
          {/* About section body copy. */}
          <p className="text-center mt-5 text-xl text-white/70">
            {pillars.description}
          </p>
        </MotionItem>
        <MotionItem variant="fadeIn" className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <BentoDemo />
        </MotionItem>

      </Container>
    </MotionSection>
  )
}
