import { useEffect, useState } from "react";
import { BRAND, IMAGES } from "../lib/brand";
import { scrollToId } from "../lib/scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleServicesClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    e.preventDefault();

    const element: HTMLElement | null =
      document.getElementById("services");

    if (element) {
      scrollToId("services");
    } else {
      window.location.href = "/#services";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled
          ? "backdrop-blur bg-zinc-950/60 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between text-white">
          <a href="/" className="flex items-center gap-3 font-semibold">
            <img src={IMAGES.logo} alt="logo" className="w-30" />
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-200">
            <a
              href="/#services"
              onClick={handleServicesClick}
              className="font-semibold hover:text-white"
            >
              Services
            </a>

            <a
              href="https://www.instagram.com/fno.detailing/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:text-white"
            >
              Gallery
            </a>
          </nav>

          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-black transition-colors duration-700 hover:bg-transparent hover:text-white"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}