import { companyConfig } from "@/content";
import { Container } from "../layout/Container";
import { MotionItem } from "../motion/MotionItem";
import { MotionSection } from "../motion/MotionSection";
import { LogosMarquee } from "./LogosMarquee";

type TrustBarProps = {
  id?: string;
};

export const TrustBar = ({ id = "customers" }: TrustBarProps) => {
  const { trustBar } = companyConfig;

  if (trustBar.mode === "off") {
    return null;
  }

  const isLogoMode = trustBar.mode === "integrations" || trustBar.mode === "logos";
  const logoItems = trustBar.mode === "logos" ? trustBar.logos : trustBar.integrations;
  const logos = logoItems.map((item) => ({ src: item.icon, alt: item.name }));

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block bg-(--ink) text-white">
      <Container>
        <MotionItem>
          <h2 className="mb-16 text-center text-lg text-white/70">{trustBar.heading}</h2>
        </MotionItem>
        <MotionItem variant="fadeIn">
          {isLogoMode ? (
            <LogosMarquee logos={logos} />
          ) : (
            <div className="grid gap-6 text-center sm:grid-cols-3">
              {trustBar.metrics.map((metric) => (
                <div key={`${metric.label}-${metric.value}`} className="space-y-1">
                  <div className="text-2xl font-semibold text-white">{metric.value}</div>
                  <div className="text-sm text-white/70">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </MotionItem>
      </Container>
    </MotionSection>
  );
};

export default TrustBar;
