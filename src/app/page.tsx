import type { Metadata } from "next";
import { cloneElement } from "react";
import type { ReactElement } from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { portfolioConfig, type HomeSectionKey } from "@/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio for a product designer and front-end partner.",
  openGraph: {
    title: "Portfolio",
    description: "Portfolio for a product designer and front-end partner.",
    images: [{ url: "/og/default.png" }],
  },
  twitter: {
    title: "Portfolio",
    description: "Portfolio for a product designer and front-end partner.",
    images: ["/og/default.png"],
  },
};

const SECTION_COMPONENTS: Record<HomeSectionKey, ReactElement<{ id?: string }>> = {
  hero: <Hero />,
  about: <AboutSection />,
  projects: <ProjectsSection />,
  services: <ServicesSection />,
  experience: <ExperienceSection />,
  contact: <ContactSection />,
};

export default function Home() {
  const { sections } = portfolioConfig.homepage;

  return (
    <div>
      <Navbar />
      <div className="overflow-x-hidden">
        <main>
          {sections.map((section) => {
            if (!section.enabled) {
              return null;
            }

            const sectionElement = SECTION_COMPONENTS[section.key];
            return cloneElement(sectionElement, { id: section.navId, key: section.key });
          })}
        </main>
        <Footer />
      </div>
    </div>
  );
}
