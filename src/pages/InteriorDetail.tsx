import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../lib/brand";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Link } from "react-router-dom";

export default function InteriorDetail() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <Hero
          variant="service"
          backgroundImage="../assets/hero/interior-detail.jpg"
          headline="Interior Detail"
          subheadline="A deep interior reset focused on removing dust, stains, and buildup—leaving your cabin crisp, clean, and comfortable."
        />

        {/* Back to Home */}
        <div className="mx-auto max-w-6xl px-6 pt-10 md:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-white"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ←
            </span>
            Back to Home
          </Link>
        </div>

        <Content title="What’s Included">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Bullet list */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <ul className="list-disc space-y-3 pl-6 text-sm md:text-base text-white/75">
                <li>Thorough interior vacuum (seats, carpets, mats, crevices)</li>
                <li>Blow-out of cracks, vents, and tight areas (as needed)</li>
                <li>Wipe-down + clean of all hard surfaces (dash, console, door panels)</li>
                <li>UV-safe interior protectant on plastics/vinyl (non-greasy finish)</li>
                <li>Interior glass cleaned streak-free</li>
                <li>Light stain treatment on seats/carpets (condition-dependent)</li>
                <li>Deodorize to freshen the cabin</li>
              </ul>

              <p className="mt-6 text-xs text-white/50">
                *Final inclusions can vary based on vehicle condition and package selected.
              </p>
            </motion.div>

            {/* Info */}
            <motion.aside
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                Info
              </div>

              <div className="mt-5 space-y-4 text-sm text-white/75">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">Estimated time</span>
                  <span className="font-semibold text-white/85">3 hours</span>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">Starting price</span>
                  <span className="font-semibold text-white/85">$185</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                {BRAND.bookingUrl && (
                  <a
                    href="https://book.squareup.com/appointments/kvgxlond03s9ui/location/L3A45N1V253YD/services/LCW3PWLLLZAK5GYOIGUMHFSY"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-2xl bg-white px-6 py-3 text-center text-sm font-extrabold uppercase tracking-widest text-black transition-colors duration-1000 hover:bg-transparent hover:text-white border border-white/30"
                  >
                    Book Now
                  </a>
                )}

                {BRAND.phone && (
                  <a
                    href={`sms:+14257771761?&body=Hi%20I%27d%20like%20a%20quote%20for%20an%20interior%20detail.`}
                    className="w-full rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white/90 transition-colors duration-1000 hover:bg-white hover:text-black"
                  >
                    Text for a Quote
                  </a>
                )}
              </div>
            </motion.aside>
          </div>
        </Content>
      </main>
      <Footer />
    </>
  );
}
