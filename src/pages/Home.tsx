import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero
          variant="main"
          backgroundVideo="./assets/hero/hero.mp4" 
          headline="PREMIUM MOBILE AUTO DETAILING"
          subheadline="We revive your ride today."
          primaryCta={{ label: "Explore Our Services", scrollTo: "services" }}
          secondaryCta={{ label: "Text Us: (425) 777-1761", href: "sms:+14257771761" }}
        />

        <Slogan />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
