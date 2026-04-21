import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { HeroSection } from "@/app/sections/services/design";
import { LogosSection, StatsSection, TestimonialsSection } from "@/app/sections/home";



export default function DesignPage() {
    return <>
        <MegaMenu activeLink='services'></MegaMenu>
        <HeroSection></HeroSection>
        <LogosSection></LogosSection> {/* -- social proof */}
        -- why
        -- portfolio
        -- features
        <TestimonialsSection></TestimonialsSection> {/* -- testimonials */}
        <StatsSection></StatsSection> {/* -- stats */}
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}