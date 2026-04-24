import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { CTASection, LogosSection, TestimonialsSection } from "@/app/sections/home";
import { HeroSection } from "@/app/sections/pricing";

export default function PricingPage() {

    return <>
        <MegaMenu activeLink='pricing'></MegaMenu>
        <HeroSection></HeroSection> {/* -- Hero */}
        <LogosSection></LogosSection>
        -- Features
        -- Product Offering
        <TestimonialsSection></TestimonialsSection> {/* -- Testimonials */}
        -- Why Us
        <CTASection></CTASection>
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}