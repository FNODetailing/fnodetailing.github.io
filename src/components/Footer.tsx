import { BRAND } from "../lib/brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="text-xl font-extrabold uppercase tracking-widest">
                            {BRAND.name}
                        </div>
                        <p className="mt-3 max-w-sm text-sm text-white/70 leading-relaxed">
                            Premium auto detailing in Kent, WA. Paint correction, ceramic coatings, and
                            maintenance services done right.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="md:justify-self-center">
                        <div className="text-sm font-extrabold uppercase tracking-widest text-white/90 text-center md:text-left">
                            Social
                        </div>

                        <div className="mt-4 flex justify-center md:justify-start gap-3">
                            {BRAND.instagram && (
                                <a
                                    href={BRAND.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors duration-700 hover:bg-white hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                                </a>
                            )}

                            {BRAND.tiktok && (
                                <a
                                    href={BRAND.tiktok}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="TikTok"
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors duration-700 hover:bg-white hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faTiktok} className="text-lg" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="md:justify-self-end">
                        <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                            Contact
                        </div>
                        <ul className="mt-4 space-y-2 text-sm">
                            {BRAND.phone && (
                                <li>
                                    <a
                                        href={`sms:+14257771761`}
                                        className="text-white/70 hover:text-white transition-colors duration-300"
                                    >
                                        {BRAND.phone}
                                    </a>
                                </li>
                            )}
                            {BRAND.email && (
                                <li>
                                    <a
                                        href={`mailto:${BRAND.email}`}
                                        className="text-white/70 hover:text-white transition-colors duration-300"
                                    >
                                        {BRAND.email}
                                    </a>
                                </li>
                            )}
                            {BRAND.location && <li className="text-white/70">{BRAND.location}</li>}
                            {BRAND.bookingUrl && (
                                <li className="pt-2">
                                    <a
                                        href={BRAND.bookingUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-black transition-colors duration-700 hover:bg-transparent hover:text-white"
                                    >
                                        Book Now
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
                    <div>© {year} {BRAND.name}. All rights reserved.</div>

                    <div className="mt-2">Made with <span className="text-red-500">♥</span> by
                        <a
                            href="https://github.com/meowphetamine"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/60 underline-offset-4 hover:underline hover:text-white transition-colors duration-300"
                        >
                            meowphetamine
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
