import { motion, useReducedMotion } from "framer-motion";

export default function Slogan() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="slogan" className="relative w-full bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-3"
        >

          {/* Slogan */}
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase italic tracking-wide">
            WE COME TO YOU!
          </h2>

          {/* Tagline */}
          <p className="max-w-3xl text-sm md:text-base text-white/80 leading-relaxed">
            Premium auto detailing services conveniently brought to your home, office, or desired location in Kent, WA. Experience top-tier care for your vehicle without the hassle of travel. Our expert team ensures your car looks its best, wherever you are.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
