import type { ProductPageScreenshots } from "@/content";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";
import { DeviceFrame } from "../ui/DeviceFrame";

type ScreenshotGridProps = {
  block: ProductPageScreenshots;
};

export const ScreenshotGrid = ({ block }: ScreenshotGridProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block bg-(--ink) text-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{block.title}</h2>
          <p className="mt-5 text-lg text-white/70">{block.description}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {block.items.map((item, index) => (
            <div
              key={`${item.alt}-${index}`}
              className={index === 0 ? "lg:col-span-2" : undefined}
            >
              <DeviceFrame
                src={item.src}
                alt={item.alt}
                sizes="(min-width: 1024px) 360px, 80vw"
                className={index === 0 ? "max-w-2xl" : "max-w-sm"}
              />
              {item.caption ? (
                <p className="mt-4 text-sm font-medium text-white/70">{item.caption}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
};
