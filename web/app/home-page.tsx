'use client'
import { Faq, Footer, MegaMenu } from "./components";
import { faqs } from "./about/sections/faq";
export const runtime = "edge";
import { BenefitsSection, FeaturesSection, HeroSection, ProcessSection, TestimonialsSection } from "@/app/sections/home";


export default function HomePage() {
  return (
    <>

      <MegaMenu activeLink={"home"}></MegaMenu>
      <div className="">
        <main className="min-h-screen">
          <HeroSection></HeroSection>
          <FeaturesSection></FeaturesSection>
          <ProcessSection></ProcessSection>
          <BenefitsSection></BenefitsSection>
          <TestimonialsSection></TestimonialsSection>
        </main>
        {/* <FAQSection></FAQSection> */}
        <Faq faqs={faqs}></Faq>

      </div>
      <Footer />
    </>
  );
}
