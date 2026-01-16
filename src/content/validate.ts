import siteConfig from "./site";
import portfolioConfig from "./portfolio";

let didValidate = false;

type Issue = {
  path: string;
  message: string;
};

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

const assertArray = (issues: Issue[], value: unknown, path: string) => {
  if (!Array.isArray(value) || value.length === 0) {
    addIssue(issues, path, "must be a non-empty array");
  }
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

  assertArray(issues, portfolioConfig.homepage.sections, "portfolioConfig.homepage.sections");
  const homeSections = Array.isArray(portfolioConfig.homepage.sections)
    ? portfolioConfig.homepage.sections
    : [];
  homeSections.forEach((section, index) => {
    assertString(issues, section.navId, `portfolioConfig.homepage.sections[${index}].navId`);
  });

  const { hero } = portfolioConfig.homepage;
  assertString(issues, hero.badge, "portfolioConfig.homepage.hero.badge");
  assertString(issues, hero.headline, "portfolioConfig.homepage.hero.headline");
  assertString(issues, hero.subheadline, "portfolioConfig.homepage.hero.subheadline");
  assertString(issues, hero.description, "portfolioConfig.homepage.hero.description");
  assertString(issues, hero.role, "portfolioConfig.homepage.hero.role");
  assertString(issues, hero.location, "portfolioConfig.homepage.hero.location");
  assertString(issues, hero.availability, "portfolioConfig.homepage.hero.availability");
  assertString(issues, hero.primaryCta.label, "portfolioConfig.homepage.hero.primaryCta.label");
  assertString(issues, hero.primaryCta.href, "portfolioConfig.homepage.hero.primaryCta.href");
  assertString(issues, hero.secondaryCta.label, "portfolioConfig.homepage.hero.secondaryCta.label");
  assertString(issues, hero.secondaryCta.href, "portfolioConfig.homepage.hero.secondaryCta.href");
  assertArray(issues, hero.highlights, "portfolioConfig.homepage.hero.highlights");
  const highlights = Array.isArray(hero.highlights) ? hero.highlights : [];
  highlights.forEach((item, index) => {
    assertString(issues, item.label, `portfolioConfig.homepage.hero.highlights[${index}].label`);
    assertString(issues, item.value, `portfolioConfig.homepage.hero.highlights[${index}].value`);
    assertString(issues, item.detail, `portfolioConfig.homepage.hero.highlights[${index}].detail`);
  });

  const { about } = portfolioConfig.homepage;
  assertString(issues, about.title, "portfolioConfig.homepage.about.title");
  assertString(issues, about.description, "portfolioConfig.homepage.about.description");
  assertArray(issues, about.highlights, "portfolioConfig.homepage.about.highlights");
  const aboutHighlights = Array.isArray(about.highlights) ? about.highlights : [];
  aboutHighlights.forEach((item, index) => {
    assertString(issues, item.title, `portfolioConfig.homepage.about.highlights[${index}].title`);
    assertString(issues, item.description, `portfolioConfig.homepage.about.highlights[${index}].description`);
  });

  const { projects } = portfolioConfig.homepage;
  assertString(issues, projects.title, "portfolioConfig.homepage.projects.title");
  assertString(issues, projects.description, "portfolioConfig.homepage.projects.description");
  assertArray(issues, projects.items, "portfolioConfig.homepage.projects.items");
  const projectsItems = Array.isArray(projects.items) ? projects.items : [];
  projectsItems.forEach((item, index) => {
    assertString(issues, item.title, `portfolioConfig.homepage.projects.items[${index}].title`);
    assertString(issues, item.summary, `portfolioConfig.homepage.projects.items[${index}].summary`);
    assertString(issues, item.year, `portfolioConfig.homepage.projects.items[${index}].year`);
    assertString(issues, item.role, `portfolioConfig.homepage.projects.items[${index}].role`);
    assertArrayValue(issues, item.tags, `portfolioConfig.homepage.projects.items[${index}].tags`);
    assertString(issues, item.link.label, `portfolioConfig.homepage.projects.items[${index}].link.label`);
    assertString(issues, item.link.href, `portfolioConfig.homepage.projects.items[${index}].link.href`);
  });

  const { services } = portfolioConfig.homepage;
  assertString(issues, services.title, "portfolioConfig.homepage.services.title");
  assertString(issues, services.description, "portfolioConfig.homepage.services.description");
  assertArray(issues, services.items, "portfolioConfig.homepage.services.items");
  const servicesItems = Array.isArray(services.items) ? services.items : [];
  servicesItems.forEach((item, index) => {
    assertString(issues, item.title, `portfolioConfig.homepage.services.items[${index}].title`);
    assertString(issues, item.description, `portfolioConfig.homepage.services.items[${index}].description`);
    assertArrayValue(issues, item.tools, `portfolioConfig.homepage.services.items[${index}].tools`);
  });

  const { experience } = portfolioConfig.homepage;
  assertString(issues, experience.title, "portfolioConfig.homepage.experience.title");
  assertString(issues, experience.description, "portfolioConfig.homepage.experience.description");
  assertArray(issues, experience.roles, "portfolioConfig.homepage.experience.roles");
  const roleItems = Array.isArray(experience.roles) ? experience.roles : [];
  roleItems.forEach((item, index) => {
    assertString(issues, item.company, `portfolioConfig.homepage.experience.roles[${index}].company`);
    assertString(issues, item.role, `portfolioConfig.homepage.experience.roles[${index}].role`);
    assertString(issues, item.period, `portfolioConfig.homepage.experience.roles[${index}].period`);
    assertString(issues, item.summary, `portfolioConfig.homepage.experience.roles[${index}].summary`);
  });

  const { contact } = portfolioConfig.homepage;
  assertString(issues, contact.title, "portfolioConfig.homepage.contact.title");
  assertString(issues, contact.description, "portfolioConfig.homepage.contact.description");
  assertString(issues, contact.email, "portfolioConfig.homepage.contact.email");
  assertString(issues, contact.location, "portfolioConfig.homepage.contact.location");
  assertString(issues, contact.availability, "portfolioConfig.homepage.contact.availability");
  assertString(issues, contact.cta.label, "portfolioConfig.homepage.contact.cta.label");
  assertString(issues, contact.cta.href, "portfolioConfig.homepage.contact.cta.href");

  if (issues.length > 0) {
    const errorMessage = issues.map((issue) => `${issue.path}: ${issue.message}`).join("\n");
    throw new Error(`Content validation failed:\n${errorMessage}`);
  }
};

export default validateContent;
