import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { Transformation } from "@/components/landing/Transformation";
import { Benefits } from "@/components/landing/Benefits";
import { WhoIsItFor } from "@/components/landing/WhoIsItFor";
import { Curriculum } from "@/components/landing/Curriculum";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { TrustSection } from "@/components/landing/TrustSection";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <Transformation />
      <Benefits />
      <WhoIsItFor />
      <Curriculum />
      <BeforeAfter />
      <TrustSection />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
