import type { ProductPageHero } from "@/content";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";
import { DeviceFrame } from "../ui/DeviceFrame";

type ProductHeroProps = {
  block: ProductPageHero;
};

export const ProductHero = ({ block }: ProductHeroProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block relative overflow-hidden bg-(--ink) text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.35),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.3),transparent_60%)] blur-3xl" />
      </div>
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{block.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{block.title}</h1>
          <p className="mt-5 text-xl text-white/70">{block.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={block.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              {block.primaryCta.label}
            </a>
            {block.secondaryCta ? (
              <a
                href={block.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
              >
                {block.secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
        {block.image ? (
          <DeviceFrame
            src={block.image.src}
            alt={block.image.alt}
            sizes="(min-width: 1024px) 520px, 92vw"
            className="max-w-md"
            priority
          />
        ) : null}
      </Container>
    </MotionSection>
  );
};
