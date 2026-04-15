import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ContentProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;

  /** Layout */
  align?: "left" | "center"; // default: left
  maxWidthClass?: string; // default: max-w-6xl
  paddingClassName?: string; // default: px-6 md:px-12
  sectionClassName?: string; // default: py-14 md:py-20
};

export default function Content({
  id,
  title,
  subtitle,
  children,
  align = "left",
  maxWidthClass = "max-w-6xl",
  paddingClassName = "px-6 md:px-12",
  sectionClassName = "py-14 md:py-20",
}: ContentProps) {
  const prefersReducedMotion = useReducedMotion();
  const headerAlign = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section id={id} className={`w-full ${sectionClassName}`}>
      <div className={`mx-auto ${maxWidthClass} ${paddingClassName}`}>
        {(title || subtitle) && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`mb-10 flex flex-col gap-3 ${headerAlign}`}
          >
            {title && (
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase italic tracking-wide text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="max-w-3xl text-sm md:text-base text-white/70 leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
