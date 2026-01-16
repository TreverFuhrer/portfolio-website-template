import { ChevronRight } from "lucide-react";
import { Container } from "./layout/Container";

export function Banner() {
  return (
    <div className="border-b border-white/10 bg-(--ink) py-3 text-white md:py-0">
      <Container className="flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        {/* Update this line to whatever quick announcement you want. */}
        <a
          href="#top"
          className="group inline-flex items-center justify-center rounded-full text-center text-sm leading-loose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
        >
          ✦
          <span className="font-bold">Announcement</span>
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </a>
      </Container>
    </div>
  );
}
