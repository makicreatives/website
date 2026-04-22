import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { FeaturesSection, HeroSection, StatsSection, PortfolioSection } from "@/app/sections/services/design";
import { LogosSection,  TestimonialsSection } from "@/app/sections/home";
import WhyUs from "@/app/sections/services/design/why-us";



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
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}