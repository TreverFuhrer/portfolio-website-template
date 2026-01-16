"use client"
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { AppScreenshotScrollEffect } from "./product/AppScreenshotScrollEffect";
import { companyConfig, products } from "@/content";

type FeaturedProductProps = {
  id?: string;
};

export const FeaturedProduct = ({ id = "featured" }: FeaturedProductProps) => {
  const featuredProduct = products[0];
  const { featuredProduct: featuredConfig } = companyConfig.homepage;
  const previewImage = featuredConfig.previewImage;
  const fallbackPreview = featuredProduct?.screenshots[0] ?? featuredProduct?.page.screenshots.items[0];
  const ctaLabel = featuredConfig.ctaLabel;
  const ctaHref = featuredProduct ? `/product/${featuredProduct.slug}` : "#";

  return (
    <MotionSection
      id={id}
      variant="staggerChildren"
      className="section-block bg-(--ink) text-white bg-linear-to-b from-(--ink) to-[#0b3a3a]"
    >
      <Container>
        <MotionItem>
          <p className="text-center text-sm uppercase tracking-[0.3em] text-white/50">
            {featuredConfig.eyebrow}
          </p>
        </MotionItem>
        <MotionItem>
          <h2 className="mt-4 text-center text-5xl font-bold tracking-tighter">
            {featuredProduct?.name ?? "Product"}
          </h2>
        </MotionItem>
        <MotionItem className="mx-auto mt-5 max-w-xl">
          <p className="text-center text-xl text-white/70">
            {featuredProduct?.tagline ?? "A concise description of your flagship product."}
          </p>
        </MotionItem>
        <MotionItem className="flex justify-center">
          <Link
            href={ctaHref}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
          >
            {ctaLabel}
          </Link>
        </MotionItem>
        <AppScreenshotScrollEffect className="flex justify-center">
          {/* Swap this image with a product screenshot. */}
          <Image
            src={previewImage?.src ?? fallbackPreview?.src ?? appScreen}
            alt={previewImage?.alt ?? fallbackPreview?.alt ?? "Product preview"}
            className="mt-14"
            sizes="(min-width: 1024px) 720px, (min-width: 640px) 80vw, 92vw"
          />
        </AppScreenshotScrollEffect>

      </Container>

    </MotionSection>
  );
};
