import siteConfig from "./site";
import companyConfig from "./company";
import products from "./products";
import pricingSection from "./pricing";
import faqSection from "./faq";
import logosSection from "./logos";
import type { ProductPageBlockKey } from "./types";

let didValidate = false;

type Issue = {
  path: string;
  message: string;
};

const blockKeys: ProductPageBlockKey[] = [
  "hero",
  "screenshots",
  "howItWorks",
  "featureGrid",
  "useCases",
  "pricing",
  "faq",
  "finalCta",
];
const trustBarModes = ["integrations", "logos", "metrics", "off"] as const;

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const addIssue = (issues: Issue[], path: string, message: string) => {
  issues.push({ path, message });
};

const assertString = (issues: Issue[], value: unknown, path: string) => {
  if (!isNonEmptyString(value)) {
    addIssue(issues, path, "must be a non-empty string");
  }
};

const assertOptionalString = (issues: Issue[], value: unknown, path: string) => {
  if (value !== undefined && !isNonEmptyString(value)) {
    addIssue(issues, path, "must be a non-empty string when provided");
  }
};

const assertArray = (issues: Issue[], value: unknown, path: string) => {
  if (!Array.isArray(value) || value.length === 0) {
    addIssue(issues, path, "must be a non-empty array");
  }
};

const assertNumber = (issues: Issue[], value: unknown, path: string) => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    addIssue(issues, path, "must be a number");
  }
};

const assertImage = (issues: Issue[], value: unknown, path: string) => {
  if (typeof value === "string") {
    return;
  }

  if (value && typeof value === "object" && "src" in value) {
    const srcValue = (value as { src?: unknown }).src;
    if (typeof srcValue === "string") {
      return;
    }

    if (srcValue && typeof srcValue === "object" && "src" in srcValue) {
      const nestedSrc = (srcValue as { src?: unknown }).src;
      if (typeof nestedSrc === "string") {
        return;
      }
    }
  }

  addIssue(issues, path, "must be an imported image");
};

const assertArrayValue = (issues: Issue[], value: unknown, path: string) => {
  if (!Array.isArray(value)) {
    addIssue(issues, path, "must be an array");
  }
};

export const validateContent = () => {
  if (didValidate) {
    return;
  }

  didValidate = true;
  const issues: Issue[] = [];

  assertString(issues, siteConfig.brand.name, "siteConfig.brand.name");
  assertString(issues, siteConfig.brand.logoLabel, "siteConfig.brand.logoLabel");
  assertString(issues, siteConfig.siteUrl, "siteConfig.siteUrl");
  assertArray(issues, siteConfig.nav, "siteConfig.nav");
  assertString(issues, siteConfig.navbar.primaryCta.label, "siteConfig.navbar.primaryCta.label");
  assertString(issues, siteConfig.navbar.primaryCta.href, "siteConfig.navbar.primaryCta.href");
  assertArray(issues, siteConfig.socials, "siteConfig.socials");

  const seenSectionIds = new Set<string>();
  const navItems = Array.isArray(siteConfig.nav) ? siteConfig.nav : [];
  navItems.forEach((item, index) => {
    assertString(issues, item.label, `siteConfig.nav[${index}].label`);
    assertString(issues, item.href, `siteConfig.nav[${index}].href`);

    if (item.type === "anchor") {
      assertString(issues, item.sectionId, `siteConfig.nav[${index}].sectionId`);
      if (isNonEmptyString(item.sectionId) && isNonEmptyString(item.href)) {
        if (!item.href.includes(`#${item.sectionId}`)) {
          addIssue(
            issues,
            `siteConfig.nav[${index}].href`,
            `must include #${item.sectionId} to match sectionId`,
          );
        }
      }

      if (isNonEmptyString(item.sectionId)) {
        if (seenSectionIds.has(item.sectionId)) {
          addIssue(issues, `siteConfig.nav[${index}].sectionId`, "must be unique");
        }
        seenSectionIds.add(item.sectionId);
      }
    }
  });

  const socialItems = Array.isArray(siteConfig.socials) ? siteConfig.socials : [];
  socialItems.forEach((item, index) => {
    assertString(issues, item.label, `siteConfig.socials[${index}].label`);
    assertString(issues, item.href, `siteConfig.socials[${index}].href`);
    assertString(issues, item.icon, `siteConfig.socials[${index}].icon`);
  });

  assertArray(issues, companyConfig.homepage.sections, "companyConfig.homepage.sections");
  const homeSections = Array.isArray(companyConfig.homepage.sections) ? companyConfig.homepage.sections : [];
  homeSections.forEach((section, index) => {
    assertString(issues, section.navId, `companyConfig.homepage.sections[${index}].navId`);
  });

  assertString(issues, companyConfig.homepage.hero.badge, "companyConfig.homepage.hero.badge");
  assertString(issues, companyConfig.homepage.hero.headline, "companyConfig.homepage.hero.headline");
  assertString(issues, companyConfig.homepage.hero.subheadline, "companyConfig.homepage.hero.subheadline");
  assertString(issues, companyConfig.homepage.hero.description, "companyConfig.homepage.hero.description");
  assertString(issues, companyConfig.homepage.hero.primaryCta.label, "companyConfig.homepage.hero.primaryCta.label");
  assertString(issues, companyConfig.homepage.hero.primaryCta.href, "companyConfig.homepage.hero.primaryCta.href");
  assertString(issues, companyConfig.homepage.hero.secondaryCta.label, "companyConfig.homepage.hero.secondaryCta.label");
  assertString(issues, companyConfig.homepage.hero.secondaryCta.href, "companyConfig.homepage.hero.secondaryCta.href");

  assertImage(issues, companyConfig.heroVisual?.primary, "companyConfig.heroVisual.primary");
  assertString(issues, companyConfig.heroVisual?.primary?.alt, "companyConfig.heroVisual.primary.alt");
  if (companyConfig.heroVisual?.secondary) {
    assertImage(issues, companyConfig.heroVisual.secondary, "companyConfig.heroVisual.secondary");
    assertString(issues, companyConfig.heroVisual.secondary.alt, "companyConfig.heroVisual.secondary.alt");
  }

  assertString(issues, companyConfig.homepage.mission.title, "companyConfig.homepage.mission.title");
  assertString(issues, companyConfig.homepage.mission.description, "companyConfig.homepage.mission.description");
  assertArray(issues, companyConfig.homepage.mission.points, "companyConfig.homepage.mission.points");
  const missionPoints = Array.isArray(companyConfig.homepage.mission.points)
    ? companyConfig.homepage.mission.points
    : [];
  missionPoints.forEach((point, index) => {
    assertString(issues, point.title, `companyConfig.homepage.mission.points[${index}].title`);
    assertString(issues, point.description, `companyConfig.homepage.mission.points[${index}].description`);
  });

  assertString(issues, companyConfig.homepage.pillars.title, "companyConfig.homepage.pillars.title");
  assertString(issues, companyConfig.homepage.pillars.description, "companyConfig.homepage.pillars.description");

  assertString(issues, companyConfig.homepage.featuredProduct.eyebrow, "companyConfig.homepage.featuredProduct.eyebrow");
  assertString(issues, companyConfig.homepage.featuredProduct.ctaLabel, "companyConfig.homepage.featuredProduct.ctaLabel");
  assertImage(
    issues,
    companyConfig.homepage.featuredProduct.previewImage,
    "companyConfig.homepage.featuredProduct.previewImage",
  );
  assertString(
    issues,
    companyConfig.homepage.featuredProduct.previewImage?.alt,
    "companyConfig.homepage.featuredProduct.previewImage.alt",
  );

  assertString(issues, companyConfig.homepage.vision.title, "companyConfig.homepage.vision.title");
  assertString(issues, companyConfig.homepage.vision.description, "companyConfig.homepage.vision.description");
  assertArray(issues, companyConfig.homepage.vision.initiatives, "companyConfig.homepage.vision.initiatives");
  const visionItems = Array.isArray(companyConfig.homepage.vision.initiatives)
    ? companyConfig.homepage.vision.initiatives
    : [];
  visionItems.forEach((item, index) => {
    assertString(issues, item.title, `companyConfig.homepage.vision.initiatives[${index}].title`);
    assertString(issues, item.description, `companyConfig.homepage.vision.initiatives[${index}].description`);
    assertString(issues, item.status, `companyConfig.homepage.vision.initiatives[${index}].status`);
  });

  assertString(issues, companyConfig.homepage.cta.headline, "companyConfig.homepage.cta.headline");
  assertString(issues, companyConfig.homepage.cta.description, "companyConfig.homepage.cta.description");
  assertString(issues, companyConfig.homepage.cta.inputPlaceholder, "companyConfig.homepage.cta.inputPlaceholder");
  assertString(issues, companyConfig.homepage.cta.primaryCta.label, "companyConfig.homepage.cta.primaryCta.label");

  if (!trustBarModes.includes(companyConfig.trustBar.mode)) {
    addIssue(issues, "companyConfig.trustBar.mode", "must be integrations, logos, metrics, or off");
  }
  assertString(issues, companyConfig.trustBar.heading, "companyConfig.trustBar.heading");
  assertArrayValue(issues, companyConfig.trustBar.integrations, "companyConfig.trustBar.integrations");
  assertArrayValue(issues, companyConfig.trustBar.logos, "companyConfig.trustBar.logos");
  assertArrayValue(issues, companyConfig.trustBar.metrics, "companyConfig.trustBar.metrics");

  const trustIntegrations = Array.isArray(companyConfig.trustBar.integrations)
    ? companyConfig.trustBar.integrations
    : [];
  const trustLogos = Array.isArray(companyConfig.trustBar.logos) ? companyConfig.trustBar.logos : [];
  const trustMetrics = Array.isArray(companyConfig.trustBar.metrics) ? companyConfig.trustBar.metrics : [];

  if (companyConfig.trustBar.mode === "integrations" && trustIntegrations.length === 0) {
    addIssue(issues, "companyConfig.trustBar.integrations", "must include at least one integration");
  }
  if (companyConfig.trustBar.mode === "logos" && trustLogos.length === 0) {
    addIssue(issues, "companyConfig.trustBar.logos", "must include at least one logo");
  }
  if (companyConfig.trustBar.mode === "metrics" && trustMetrics.length === 0) {
    addIssue(issues, "companyConfig.trustBar.metrics", "must include at least one metric");
  }

  trustIntegrations.forEach((item, index) => {
    assertString(issues, item.name, `companyConfig.trustBar.integrations[${index}].name`);
    if (!item.icon) {
      addIssue(issues, `companyConfig.trustBar.integrations[${index}].icon`, "must be set");
    }
  });

  trustLogos.forEach((item, index) => {
    assertString(issues, item.name, `companyConfig.trustBar.logos[${index}].name`);
    if (!item.icon) {
      addIssue(issues, `companyConfig.trustBar.logos[${index}].icon`, "must be set");
    }
  });

  trustMetrics.forEach((item, index) => {
    assertString(issues, item.label, `companyConfig.trustBar.metrics[${index}].label`);
    assertString(issues, item.value, `companyConfig.trustBar.metrics[${index}].value`);
  });

  assertArray(issues, products, "products");

  const seenSlugs = new Set<string>();
  const productList = Array.isArray(products) ? products : [];
  productList.forEach((product, index) => {
    assertString(issues, product.slug, `products[${index}].slug`);
    assertString(issues, product.name, `products[${index}].name`);
    assertString(issues, product.tagline, `products[${index}].tagline`);
    assertString(issues, product.ogImage, `products[${index}].ogImage`);
    assertArray(issues, product.screenshots, `products[${index}].screenshots`);
    assertString(issues, product.primaryCta.label, `products[${index}].primaryCta.label`);
    assertString(issues, product.primaryCta.href, `products[${index}].primaryCta.href`);

    if (isNonEmptyString(product.slug)) {
      if (seenSlugs.has(product.slug)) {
        addIssue(issues, `products[${index}].slug`, "must be unique");
      }
      seenSlugs.add(product.slug);
    }

    const productScreenshots = Array.isArray(product.screenshots) ? product.screenshots : [];
    productScreenshots.forEach((shot, shotIndex) => {
      assertImage(issues, shot, `products[${index}].screenshots[${shotIndex}]`);
      assertString(issues, shot.alt, `products[${index}].screenshots[${shotIndex}].alt`);
    });

    assertArray(issues, product.page.order, `products[${index}].page.order`);
    const seenBlocks = new Set<ProductPageBlockKey>();
    const pageOrder = Array.isArray(product.page.order) ? product.page.order : [];
    pageOrder.forEach((blockKey, orderIndex) => {
      if (!blockKeys.includes(blockKey)) {
        addIssue(
          issues,
          `products[${index}].page.order[${orderIndex}]`,
          `must be one of ${blockKeys.join(", ")}`,
        );
      }
      if (seenBlocks.has(blockKey)) {
        addIssue(issues, `products[${index}].page.order[${orderIndex}]`, "must be unique");
      }
      seenBlocks.add(blockKey);
    });

    assertString(issues, product.page.hero.id, `products[${index}].page.hero.id`);
    assertString(issues, product.page.hero.eyebrow, `products[${index}].page.hero.eyebrow`);
    assertString(issues, product.page.hero.title, `products[${index}].page.hero.title`);
    assertString(issues, product.page.hero.description, `products[${index}].page.hero.description`);
    assertString(issues, product.page.hero.primaryCta.label, `products[${index}].page.hero.primaryCta.label`);
    assertString(issues, product.page.hero.primaryCta.href, `products[${index}].page.hero.primaryCta.href`);
    assertOptionalString(issues, product.page.hero.secondaryCta?.label, `products[${index}].page.hero.secondaryCta.label`);
    assertOptionalString(issues, product.page.hero.secondaryCta?.href, `products[${index}].page.hero.secondaryCta.href`);

    assertString(issues, product.page.screenshots.id, `products[${index}].page.screenshots.id`);
    assertString(issues, product.page.screenshots.title, `products[${index}].page.screenshots.title`);
    assertOptionalString(
      issues,
      product.page.screenshots.description,
      `products[${index}].page.screenshots.description`,
    );
    assertArray(issues, product.page.screenshots.items, `products[${index}].page.screenshots.items`);
    const screenshotItems = Array.isArray(product.page.screenshots.items) ? product.page.screenshots.items : [];
    screenshotItems.forEach((item, itemIndex) => {
      assertString(issues, item.alt, `products[${index}].page.screenshots.items[${itemIndex}].alt`);
      assertOptionalString(
        issues,
        item.caption,
        `products[${index}].page.screenshots.items[${itemIndex}].caption`,
      );
    });

    assertString(issues, product.page.howItWorks.id, `products[${index}].page.howItWorks.id`);
    assertString(issues, product.page.howItWorks.title, `products[${index}].page.howItWorks.title`);
    assertOptionalString(
      issues,
      product.page.howItWorks.description,
      `products[${index}].page.howItWorks.description`,
    );
    assertArray(issues, product.page.howItWorks.steps, `products[${index}].page.howItWorks.steps`);
    const howItWorksSteps = Array.isArray(product.page.howItWorks.steps) ? product.page.howItWorks.steps : [];
    howItWorksSteps.forEach((step, stepIndex) => {
      assertString(issues, step.title, `products[${index}].page.howItWorks.steps[${stepIndex}].title`);
      assertString(
        issues,
        step.description,
        `products[${index}].page.howItWorks.steps[${stepIndex}].description`,
      );
    });

    assertString(issues, product.page.featureGrid.id, `products[${index}].page.featureGrid.id`);
    assertString(issues, product.page.featureGrid.title, `products[${index}].page.featureGrid.title`);
    assertOptionalString(
      issues,
      product.page.featureGrid.description,
      `products[${index}].page.featureGrid.description`,
    );
    assertArray(issues, product.page.featureGrid.features, `products[${index}].page.featureGrid.features`);
    const featureGridItems = Array.isArray(product.page.featureGrid.features)
      ? product.page.featureGrid.features
      : [];
    featureGridItems.forEach((feature, featureIndex) => {
      assertString(
        issues,
        feature.title,
        `products[${index}].page.featureGrid.features[${featureIndex}].title`,
      );
      assertString(
        issues,
        feature.description,
        `products[${index}].page.featureGrid.features[${featureIndex}].description`,
      );
    });

    assertString(issues, product.page.useCases.id, `products[${index}].page.useCases.id`);
    assertString(issues, product.page.useCases.title, `products[${index}].page.useCases.title`);
    assertOptionalString(
      issues,
      product.page.useCases.description,
      `products[${index}].page.useCases.description`,
    );
    assertArray(issues, product.page.useCases.items, `products[${index}].page.useCases.items`);
    const useCaseItems = Array.isArray(product.page.useCases.items) ? product.page.useCases.items : [];
    useCaseItems.forEach((item, itemIndex) => {
      assertString(issues, item.title, `products[${index}].page.useCases.items[${itemIndex}].title`);
      assertString(
        issues,
        item.description,
        `products[${index}].page.useCases.items[${itemIndex}].description`,
      );
    });

    assertString(issues, product.page.pricing.id, `products[${index}].page.pricing.id`);

    assertString(issues, product.page.faq.id, `products[${index}].page.faq.id`);
    assertString(issues, product.page.faq.title, `products[${index}].page.faq.title`);
    assertArray(issues, product.page.faq.items, `products[${index}].page.faq.items`);
    const productFaqItems = Array.isArray(product.page.faq.items) ? product.page.faq.items : [];
    productFaqItems.forEach((item, itemIndex) => {
      assertString(issues, item.question, `products[${index}].page.faq.items[${itemIndex}].question`);
      assertString(issues, item.answer, `products[${index}].page.faq.items[${itemIndex}].answer`);
    });

    assertString(issues, product.page.finalCta.id, `products[${index}].page.finalCta.id`);
    assertString(issues, product.page.finalCta.title, `products[${index}].page.finalCta.title`);
    assertString(issues, product.page.finalCta.description, `products[${index}].page.finalCta.description`);
    assertString(
      issues,
      product.page.finalCta.primaryCta.label,
      `products[${index}].page.finalCta.primaryCta.label`,
    );
    assertString(
      issues,
      product.page.finalCta.primaryCta.href,
      `products[${index}].page.finalCta.primaryCta.href`,
    );
    assertOptionalString(
      issues,
      product.page.finalCta.secondaryCta?.label,
      `products[${index}].page.finalCta.secondaryCta.label`,
    );
    assertOptionalString(
      issues,
      product.page.finalCta.secondaryCta?.href,
      `products[${index}].page.finalCta.secondaryCta.href`,
    );

    assertArray(issues, product.page.nav, `products[${index}].page.nav`);
    const productNav = Array.isArray(product.page.nav) ? product.page.nav : [];
    productNav.forEach((item, navIndex) => {
      assertString(issues, item.id, `products[${index}].page.nav[${navIndex}].id`);
      assertString(issues, item.label, `products[${index}].page.nav[${navIndex}].label`);
    });
  });

  assertString(issues, pricingSection.title, "pricingSection.title");
  assertString(issues, pricingSection.description, "pricingSection.description");
  assertString(issues, pricingSection.billing.yearlyLabel, "pricingSection.billing.yearlyLabel");
  assertString(issues, pricingSection.billing.monthlyLabel, "pricingSection.billing.monthlyLabel");
  assertString(issues, pricingSection.billing.yearlyDiscount, "pricingSection.billing.yearlyDiscount");
  assertString(issues, pricingSection.billing.priceSuffix, "pricingSection.billing.priceSuffix");
  assertString(issues, pricingSection.includesLabel, "pricingSection.includesLabel");
  assertString(issues, pricingSection.popularBadge, "pricingSection.popularBadge");
  assertArray(issues, pricingSection.plans, "pricingSection.plans");

  const pricingPlans = Array.isArray(pricingSection.plans) ? pricingSection.plans : [];
  pricingPlans.forEach((plan, index) => {
    assertString(issues, plan.id, `pricingSection.plans[${index}].id`);
    assertString(issues, plan.name, `pricingSection.plans[${index}].name`);
    assertString(issues, plan.description, `pricingSection.plans[${index}].description`);
    assertString(issues, plan.ctaLabel, `pricingSection.plans[${index}].ctaLabel`);
    assertArray(issues, plan.features, `pricingSection.plans[${index}].features`);
    const planFeatures = Array.isArray(plan.features) ? plan.features : [];
    planFeatures.forEach((feature, featureIndex) => {
      assertString(issues, feature, `pricingSection.plans[${index}].features[${featureIndex}]`);
    });
    assertNumber(issues, plan.price.monthly, `pricingSection.plans[${index}].price.monthly`);
    assertNumber(issues, plan.price.yearly, `pricingSection.plans[${index}].price.yearly`);
  });

  assertString(issues, faqSection.title, "faqSection.title");
  assertArray(issues, faqSection.items, "faqSection.items");
  const faqItems = Array.isArray(faqSection.items) ? faqSection.items : [];
  faqItems.forEach((item, index) => {
    assertString(issues, item.question, `faqSection.items[${index}].question`);
    assertString(issues, item.answer, `faqSection.items[${index}].answer`);
  });

  assertString(issues, logosSection.heading, "logosSection.heading");
  assertArray(issues, logosSection.logos, "logosSection.logos");
  const logoItems = Array.isArray(logosSection.logos) ? logosSection.logos : [];
  logoItems.forEach((logo, index) => {
    assertString(issues, logo.alt, `logosSection.logos[${index}].alt`);
  });

  if (issues.length > 0) {
    const message = issues.map((issue) => `- ${issue.path}: ${issue.message}`).join("\n");
    throw new Error(`Content validation failed:\n${message}`);
  }
};

export default validateContent;
