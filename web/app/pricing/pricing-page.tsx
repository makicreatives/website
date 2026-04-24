import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { CTASection, TestimonialsSection } from "@/app/sections/home";

export default function PricingPage() {

    return <>
        <MegaMenu activeLink='pricing'></MegaMenu>
        -- Hero
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