import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ValueFlow } from "@/components/sections/value-flow";
import { ServicesBento } from "@/components/sections/services-bento";
import { IntelligenceChart } from "@/components/sections/intelligence-chart";
import { VisualStack } from "@/components/sections/visual-stack";
import { NationalCoverageSlider } from "@/components/sections/national-coverage-slider";
import { CoverageGlobe } from "@/components/sections/coverage-globe";
import { Technology } from "@/components/sections/technology";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import ParticlesBackground from "@/components/ui/particles-bg";

export default function Home() {
  return (
    <>
      {/* Fixed particles behind everything — visible across the entire page */}
      <ParticlesBackground />

      <main className="relative min-h-screen overflow-x-hidden text-foreground" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <ValueFlow />
        <ServicesBento />
        <IntelligenceChart />
        <VisualStack />
        <NationalCoverageSlider />
        <CoverageGlobe />
        <Technology />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
