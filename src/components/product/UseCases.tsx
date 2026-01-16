import type { ProductPageUseCases } from "@/content";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";

type UseCasesProps = {
  block: ProductPageUseCases;
};

export const UseCases = ({ block }: UseCasesProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block bg-(--ink) text-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{block.title}</h2>
          {block.description ? <p className="mt-5 text-lg text-white/70">{block.description}</p> : null}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {block.items.map((item, index) => (
            <div key={`${item.title}-${index}`} className="rounded-2xl border border-white/10 bg-(--surface) p-6 shadow shadow-black/40">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
};
