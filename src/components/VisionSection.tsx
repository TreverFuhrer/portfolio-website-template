import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { companyConfig } from "@/content";

type VisionSectionProps = {
  id?: string;
};

export const VisionSection = ({ id = "vision" }: VisionSectionProps) => {
  const { vision } = companyConfig.homepage;

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block bg-(--ink) text-white">
      <Container>
        <MotionItem>
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">{vision.title}</h2>
        </MotionItem>
        <MotionItem className="mx-auto mt-5 max-w-2xl">
          <p className="text-center text-xl text-white/70">{vision.description}</p>
        </MotionItem>
        <MotionItem className="mt-12 grid gap-6 md:grid-cols-3">
          {vision.initiatives.map((initiative) => (
            <div key={initiative.title} className="rounded-2xl border border-white/10 bg-(--surface) p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">{initiative.status}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{initiative.title}</h3>
              <p className="mt-3 text-sm text-white/70">{initiative.description}</p>
            </div>
          ))}
        </MotionItem>
      </Container>
    </MotionSection>
  );
};

export default VisionSection;
