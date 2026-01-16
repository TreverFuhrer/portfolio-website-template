import type { ProductPageFinalCta } from "@/content";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";

type FinalCTAProps = {
  block: ProductPageFinalCta;
};

export const FinalCTA = ({ block }: FinalCTAProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block bg-(--ink) text-white">
      <Container className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{block.title}</h2>
        <p className="mt-5 text-lg text-white/70">{block.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={block.primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
          >
            {block.primaryCta.label}
          </a>
          {block.secondaryCta ? (
            <a
              href={block.secondaryCta.href}
              className="inline-flex items-center justify-center text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              {block.secondaryCta.label}
            </a>
          ) : null}
        </div>
      </Container>
    </MotionSection>
  );
};
