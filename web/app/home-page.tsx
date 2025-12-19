'use client'
import { Faq, Footer, MegaMenu } from "./components";
import { faqs } from "./about/sections/faq";
export const runtime = "edge";
import { BenefitsSection, CTASection, FeaturesSection, HeroSection, LogosSection, PortfolioSection, ProcessSection, QuickCTASection, StatsSection, TestimonialsSection } from "@/app/sections/home";
import OurWorkSection from "./sections/home/our-work";


export default function HomePage() {
  return (
    <>

      <MegaMenu activeLink={"home"}></MegaMenu>
      <div className="">
        <main className="min-h-screen">
          <HeroSection></HeroSection>
          <LogosSection></LogosSection>
          <QuickCTASection></QuickCTASection>
          <StatsSection></StatsSection>
          <OurWorkSection></OurWorkSection>
          <BenefitsSection></BenefitsSection>
          <FeaturesSection></FeaturesSection>
          <PortfolioSection></PortfolioSection>
          <TestimonialsSection></TestimonialsSection>
          <ProcessSection></ProcessSection>
          <CTASection></CTASection>
        </main>
        {/* <FAQSection></FAQSection> */}
        <Faq faqs={faqs}></Faq>

      </div>
      <Footer />
    </>
  );
}
