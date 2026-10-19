import { Faq, Footer, MegaMenu } from "@/src/components";
import { faqs } from "@/src/sections/about/faq";
import { FeaturesSection, HeroSection, StatsSection, PortfolioSection } from "@/src/sections/services/design";
import { CTASection, LogosSection,  TestimonialsSection } from "@/src/sections/home";
import WhyUs from "@/src/sections/services/design/why-us";



export default function DesignPage() {
    return <>
        <MegaMenu activeLink='services'></MegaMenu>
        <HeroSection></HeroSection>
        <LogosSection></LogosSection> {/* -- social proof */}
        <WhyUs></WhyUs>  {/* -- why */}
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