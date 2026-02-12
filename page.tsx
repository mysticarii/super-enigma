import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Integrations from "@/components/Integrations";
import Architecture from "@/components/Architecture";
import GrowthChart from "@/components/GrowthChart";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Integrations />
        <Architecture />
        <GrowthChart />
        <Trust />
        <Services />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
