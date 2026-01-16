import type { ProductPageHowItWorks } from "@/content";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";

type HowItWorksProps = {
  block: ProductPageHowItWorks;
};

export const HowItWorks = ({ block }: HowItWorksProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block bg-(--ink) text-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{block.title}</h2>
          {block.description ? <p className="mt-5 text-lg text-white/70">{block.description}</p> : null}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {block.steps.map((step, index) => (
            <div key={`${step.title}-${index}`} className="rounded-2xl border border-white/10 bg-(--surface) p-6 shadow shadow-black/40">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Step {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
};
