import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { companyConfig } from "@/content";

type MissionSectionProps = {
  id?: string;
};

export const MissionSection = ({ id = "mission" }: MissionSectionProps) => {
  const { mission } = companyConfig.homepage;

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block bg-(--ink) text-white">
      <Container>
        <MotionItem>
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">{mission.title}</h2>
        </MotionItem>
        <MotionItem className="mx-auto mt-5 max-w-2xl">
          <p className="text-center text-xl text-white/70">{mission.description}</p>
        </MotionItem>
        <MotionItem className="mt-12 grid gap-6 md:grid-cols-3">
          {mission.points.map((point) => (
            <div key={point.title} className="rounded-2xl border border-white/10 bg-(--surface) p-6">
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm text-white/70">{point.description}</p>
            </div>
          ))}
        </MotionItem>
      </Container>
    </MotionSection>
  );
};

export default MissionSection;
