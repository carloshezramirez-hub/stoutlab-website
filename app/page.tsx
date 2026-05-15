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

export default function Home() {
  return (
    <main>
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
  );
}
