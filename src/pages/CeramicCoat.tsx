import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../lib/brand";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function CeramicCoat() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Ceramic Coating in Kent, WA | Turn 4 Detail</title>
        <meta
          name="description"
          content="Ceramic coating in Kent, WA with prep wash, decontamination, paint correction, panel wipe, and long-term paint protection."
        />
        <link rel="canonical" href="https://fnodetailing.github.io/services/ceramic-coat" />
      </Helmet>

      <Header />
      <main className="min-h-screen bg-black text-white">
        <Hero
          variant="service"
          backgroundImage="./assets/src/assets/hero/ceramic-coat.jpg"
          headline="Ceramic Coat"
          subheadline="Long-term protection with insane gloss and easy maintenance. A proper coating package includes prep + paint correction so the coating bonds correctly and looks its best."
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
                <li>Thorough wash + safe dry to prep the surface</li>
                <li>Chemical decontamination (iron removal) to reduce embedded particles</li>
                <li>Clay treatment (as needed) for a smooth surface</li>
                <li>Paint inspection under lighting to assess defects</li>
                <li>Paint correction/polishing to maximize gloss (level varies by package)</li>
                <li>Panel wipe to remove polishing oils for proper coating bond</li>
                <li>Ceramic coating applied to paint (number of layers varies)</li>
                <li>Optional add-ons: wheels, glass, trim coating (if selected)</li>
                <li>Final inspection + aftercare guidance</li>
              </ul>

              <p className="mt-6 text-xs text-white/50">
                *Coating longevity depends on maintenance, wash habits, and environmental conditions.
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
                  <span className="font-semibold text-white/85">11 hours</span>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">Starting price</span>
                  <span className="font-semibold text-white/85">Price varies</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                {BRAND.bookingUrl && (
                  <a
                    href="https://book.squareup.com/appointments/kvgxlond03s9ui/location/L3A45N1V253YD/services/ZRFS6AQ67L72SQO3WM5RQENC"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-2xl bg-white px-6 py-3 text-center text-sm font-extrabold uppercase tracking-widest text-black transition-colors duration-1000 hover:bg-transparent hover:text-white border border-white/30"
                  >
                    Book Now
                  </a>
                )}

                <a
                  href="sms:+14257771761?&body=Hi%20I%27d%20like%20a%20quote%20for%20a%20ceramic%20coating."
                  className="w-full rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white/90 transition-colors duration-1000 hover:bg-white hover:text-black"
                >
                  Text for a Quote
                </a>
              </div>
            </motion.aside>
          </div>
        </Content>
      </main>
      <Footer />
    </>
  );
}
