import type { Product } from "@/content";
import { FeatureGrid } from "./FeatureGrid";
import { FinalCTA } from "./FinalCTA";
import { HowItWorks } from "./HowItWorks";
import { ProductFAQ } from "./ProductFAQ";
import { ProductHero } from "./ProductHero";
import { ScreenshotGrid } from "./ScreenshotGrid";
import { UseCases } from "./UseCases";
import { Pricing } from "../Pricingdemo";

type ProductSectionsProps = {
  product: Product;
};

export const ProductSections = ({ product }: ProductSectionsProps) => {
  const { page } = product;

  return (
    <>
      {page.order.map((blockKey) => {
        switch (blockKey) {
          case "hero":
            return <ProductHero key={blockKey} block={page.hero} />;
          case "screenshots":
            return <ScreenshotGrid key={blockKey} block={page.screenshots} />;
          case "howItWorks":
            return <HowItWorks key={blockKey} block={page.howItWorks} />;
          case "featureGrid":
            return <FeatureGrid key={blockKey} block={page.featureGrid} />;
          case "useCases":
            return <UseCases key={blockKey} block={page.useCases} />;
          case "pricing":
            return <Pricing key={blockKey} id={page.pricing.id} />;
          case "faq":
            return <ProductFAQ key={blockKey} block={page.faq} />;
          case "finalCta":
            return <FinalCTA key={blockKey} block={page.finalCta} />;
          default:
            return null;
        }
      })}
    </>
  );
};
