import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
    { key: "exterior", title: "EXTERIOR DETAIL", image: "./assets/src/assets/services/exterior-detail.jpg", href: "/services/exterior-detail" },
    { key: "interior", title: "INTERIOR DETAIL", image: "./assets/src/assets/services/interior-detail.jpg", href: "/services/interior-detail" },
    { key: "full", title: "FULL DETAIL", image: "./assets/src/assets/services/full-detail.jpg", href: "/services/full-detail" },
    { key: "ceramic", title: "CERAMIC COAT", image: "./assets/src/assets/services/ceramic-coat.jpg", href: "/services/ceramic-coat" },
] as const;

export default function Services() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section id="services" className="w-full bg-black py-14 md:py-20">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-10 text-center"
                >
                    {/* Header */}
                    <h2 className="text-3xl md:text-5xl font-extrabold uppercase italic tracking-wide text-white">
                        Services
                    </h2>

                    {/* Tagline */}
                    <p className="mt-3 text-sm md:text-base text-white/70">
                        Choose a service to learn more and get pricing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s, idx) => (
                        <motion.div
                            key={s.key}
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                                delay: prefersReducedMotion ? 0 : idx * 0.06,
                            }}
                            className="h-full"
                        >
                            <Link
                                to={s.href}
                                aria-label={s.title}
                                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                {/* Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                    style={{ backgroundImage: `url(${s.image})` }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/55 transition-colors duration-700 group-hover:bg-black/40" />

                                {/* Text */}
                                <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
                                    <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-widest text-white drop-shadow">
                                        {s.title}
                                    </h3>

                                    <div className="mt-4 h-1 w-16 rounded-full bg-white/80 transition-all duration-700 group-hover:w-24" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
