import Image, { type StaticImageData } from "next/image";
import { cn } from "../lib/utils";

type DeviceFrameProps = {
  src: StaticImageData;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export const DeviceFrame = ({
  src,
  alt,
  sizes = "(min-width: 1024px) 420px, 80vw",
  className,
  priority = false,
}: DeviceFrameProps) => {
  return (
    <div className={cn("relative mx-auto w-full max-w-sm", className)}>
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_60%)] blur-2xl" />
      <div className="relative rounded-[2.5rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-black/50">
          <div
            className="absolute left-1/2 top-3 h-2 w-16 -translate-x-1/2 rounded-full bg-white/20"
            aria-hidden="true"
          />
          <Image src={src} alt={alt} className="block h-auto w-full" sizes={sizes} priority={priority} />
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;
