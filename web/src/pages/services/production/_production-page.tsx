import { Faq, Footer, MegaMenu } from "@/src/components";
import { faqs } from "@/src/sections/about/faq";
import { FeaturesSection, HeroSection, PortfolioSection, WhyUsSection, StatsSection } from "@/src/sections/services/production";
import { CTASection, LogosSection, TestimonialsSection } from "@/src/sections/home";


export default function ProductionPage() {
    return <>
        <MegaMenu activeLink='services'></MegaMenu>
        <HeroSection></HeroSection>
        <LogosSection></LogosSection> {/* -- social proof */}
        <WhyUsSection></WhyUsSection>  {/* -- why */}
        <PortfolioSection></PortfolioSection>  {/* -- portfolio */}
        <FeaturesSection></FeaturesSection>  {/* -- features */}
        <TestimonialsSection></TestimonialsSection> {/* -- testimonials */}
        <StatsSection></StatsSection> {/* -- stats */}
        <CTASection></CTASection>
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}