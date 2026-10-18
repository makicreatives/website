import { Faq, Footer, MegaMenu } from "@/src/components";
import { faqs } from "@/src/pages/about/sections/faq";
import { LogosSection, TestimonialsSection, CTASection } from "@/src/sections/home";
import { FeaturesSection, HeroSection, WhyUsSection, PortfolioSection, StatsSection } from "@/src/sections/services";



export default function ServicesPage() {
    return <>
        <MegaMenu activeLink='services'></MegaMenu>
        <HeroSection></HeroSection>
        <LogosSection></LogosSection> {/* -- social proof */}
        <WhyUsSection></WhyUsSection> 
        <PortfolioSection></PortfolioSection> {/* -- portfolio */}
        <FeaturesSection></FeaturesSection>
        <TestimonialsSection></TestimonialsSection> {/* -- testimonials */}
        <StatsSection></StatsSection>
        <CTASection></CTASection>
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}