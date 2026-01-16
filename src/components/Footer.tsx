
import { InstaIcon, XIcon, LinkedInIcon, YoutubeIcon } from "./icons";
import { Container } from "./layout/Container";

export const Footer = () => {
  return(
    <footer className='py-5 bg-(--ink) text-white/60 border-t border-white/10'>
    <Container>
      <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
        {/* Update the footer label to your company name. */}
        <div className="text-center">Copyright 2024 Company Name. All rights reserved.</div>
        {/* Replace these with your real social URLs. */}
        <ul className='flex justify-center gap-2.5' aria-label="Social links">
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              <XIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              <InstaIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              <YoutubeIcon />
            </a>
          </li>
        </ul>
      </div>

    </Container>
    </footer>
  )
};
