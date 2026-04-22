import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { LogosSection, TestimonialsSection, StatsSection, PortfolioSection, CTASection } from "@/app/sections/home";
import { FeaturesSection, HeroSection, WhyUsSection } from "@/app/sections/services";



export default function ServicesPage() {
    return <>
        <MegaMenu activeLink='services'></MegaMenu>
        <HeroSection></HeroSection>
        <LogosSection></LogosSection> {/* -- social proof */}
        <WhyUsSection></WhyUsSection> {/* -- why */}
        <PortfolioSection></PortfolioSection>{/* -- portfolio */}
        <FeaturesSection></FeaturesSection>
        <TestimonialsSection></TestimonialsSection> {/* -- testimonials */}
        <StatsSection></StatsSection> {/* -- stats */}
        <CTASection></CTASection>
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}