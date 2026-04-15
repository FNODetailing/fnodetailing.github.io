import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { scrollToId } from "../lib/scroll";

type Cta = { label: string; href?: string; scrollTo?: string };
type HeroVariant = "main" | "service";

type HeroProps = {
  backgroundImage?: string;            // now optional (for video-only heroes)
  backgroundVideo?: string;            // NEW: mp4/webm URL
  backgroundVideoPoster?: string;      // NEW: poster image for loading / fallback

  headline: string;
  subheadline?: string;

  primaryCta?: Cta;
  secondaryCta?: Cta;

  variant?: HeroVariant;

  id?: string;
  className?: string;
};

export default function Hero({
  backgroundImage,
  backgroundVideo,
  backgroundVideoPoster,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  variant = "main",
  id = "top",
  className = "",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const enterScale = prefersReducedMotion ? 1 : 1.06;
  const scale = prefersReducedMotion
    ? 1
    : useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);

  const baseOverlay = variant === "service" ? 0.65 : 0.35;
  const maxOverlay = variant === "service" ? 0.75 : 0.6;

  const overlay = prefersReducedMotion
    ? baseOverlay
    : useTransform(scrollYProgress, [0, 0.3], [baseOverlay, maxOverlay]);

  const handleMaybeScroll =
    (scrollTarget?: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!scrollTarget) return;
      e.preventDefault();
      scrollToId(scrollTarget);
    };

  const sectionClass =
    variant === "main"
      ? "flex h-screen items-center justify-center overflow-clip"
      : "py-20 md:py-28";

  const containerClass =
    variant === "main"
      ? "relative z-10 flex h-full w-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white"
      : "relative z-10 mx-auto max-w-6xl px-6 md:px-12 text-left text-white";

  const headlineClass =
    variant === "main"
      ? "max-w-4xl text-4xl md:text-6xl font-extrabold uppercase italic tracking-wide"
      : "text-4xl md:text-6xl font-extrabold uppercase italic tracking-wide";

  const subheadlineClass =
    variant === "main"
      ? "mt-4 max-w-2xl text-sm md:text-base text-white/75 leading-relaxed"
      : "mt-5 max-w-3xl text-sm md:text-base text-white/75 leading-relaxed";

  const mainCtaClass =
    "flex-1 min-w-[160px] rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white/90 backdrop-blur transition-colors duration-1000 ease-out hover:bg-white hover:text-black";

  const servicePrimaryClass =
    "rounded-2xl border border-white/30 bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-black transition-colors duration-1000 hover:bg-transparent hover:text-white";

  const serviceSecondaryClass =
    "rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition-colors duration-1000 hover:bg-white hover:text-black";

  const hasVideo = Boolean(backgroundVideo) && !prefersReducedMotion;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={["relative w-full overflow-hidden", sectionClass, className].join(
        " "
      )}
    >
      {/* Background (Video OR Image) */}
      {hasVideo ? (
        <motion.video
          initial={{ opacity: 0, scale: enterScale, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          style={{ scale }}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          src={backgroundVideo}
          poster={backgroundVideoPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: enterScale, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          style={{
            scale,
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
        />
      )}

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: baseOverlay }}
        style={{ opacity: overlay }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className={containerClass}>
        <motion.h1
          className={headlineClass}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {headline}
        </motion.h1>

        {subheadline && (
          <motion.p
            className={subheadlineClass}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            {subheadline}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <div
            className={
              variant === "main"
                ? "mt-8 flex w-full max-w-xl flex-col gap-3"
                : "mt-8 flex flex-wrap gap-3"
            }
          >
            <div
              className={
                variant === "main"
                  ? "flex flex-wrap justify-center gap-3"
                  : "flex flex-wrap gap-3"
              }
            >
              {primaryCta && (
                <a
                  href={
                    primaryCta.href ??
                    (primaryCta.scrollTo ? `#${primaryCta.scrollTo}` : "#")
                  }
                  onClick={handleMaybeScroll(primaryCta.scrollTo)}
                  className={variant === "main" ? mainCtaClass : servicePrimaryClass}
                >
                  {primaryCta.label}
                </a>
              )}

              {secondaryCta && (
                <a
                  href={
                    secondaryCta.href ??
                    (secondaryCta.scrollTo ? `#${secondaryCta.scrollTo}` : "#")
                  }
                  onClick={handleMaybeScroll(secondaryCta.scrollTo)}
                  className={variant === "main" ? mainCtaClass : serviceSecondaryClass}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}