import Link from "next/link";
import { siteConfig } from "@/content";
import {
  DribbbleIcon,
  GithubIcon,
  InstaIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
} from "./icons";
import { Container } from "./layout/Container";

const socialIcons = {
  x: XIcon,
  linkedin: LinkedInIcon,
  instagram: InstaIcon,
  youtube: YoutubeIcon,
  github: GithubIcon,
  dribbble: DribbbleIcon,
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--ink)/10 bg-white/80 py-8 text-(--ink)/60">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm">
            <span className="font-semibold text-(--ink)">{siteConfig.brand.name}</span> (c) {year}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#top"
              className="text-sm font-semibold text-(--ink)/70 transition hover:text-(--ink) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
            >
              Back to top
            </Link>
            <ul className="flex items-center gap-3" aria-label="Social links">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                if (!Icon) {
                  return null;
                }

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="rounded-full text-(--ink)/60 transition hover:text-(--ink) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
