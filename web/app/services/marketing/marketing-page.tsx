import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { FeaturesSection, HeroSection, PortfolioSection, WhyUsSection, StatsSection } from "@/app/sections/services/marketing";
import { CTASection, LogosSection, TestimonialsSection } from "@/app/sections/home";



export default function MarketingPage() {
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