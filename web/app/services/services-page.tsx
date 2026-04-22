import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { LogosSection, TestimonialsSection, CTASection } from "@/app/sections/home";
import { FeaturesSection, HeroSection, WhyUsSection, PortfolioSection, StatsSection } from "@/app/sections/services";



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